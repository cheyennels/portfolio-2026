"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { Img } from "@/content/projects";
import { Arrow } from "./Arrow";

// A grid of screenshots; clicking one opens it large in a modal,
// with arrows to step through the rest of this grid.
export function ImageGrid({ images, columns = 4 }: { images: Img[]; columns?: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : images[index];
  const several = images.length > 1;

  return (
    <>
      <div className={`feature__images cols-${columns}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`gallery__item${img.wide ? " wide" : ""}`}
            onClick={() => open(i)}
            aria-label={`Enlarge: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes={img.wide ? "(max-width: 1160px) 100vw, 1000px" : "(max-width: 640px) 50vw, 500px"}
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current?.alt ?? "Image viewer"}
        // a click anywhere on the dark area (not the image or a button) closes it
        onClick={(e) => !(e.target as HTMLElement).closest("img, button") && close()}
      >
        {current && (
          <>
            {/* sized to the picture itself, so clicks on the dark area beside it close the modal */}
            <Image
              key={current.src}
              className="lightbox__img"
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="92vw"
              style={{ "--ratio": current.width / current.height } as CSSProperties}
            />
            <p className="lightbox__caption">
              {current.alt}
              {several && <span className="lightbox__count"> · {index! + 1} / {images.length}</span>}
            </p>
            <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
              ×
            </button>
            {several && (
              <>
                <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous image">
                  <Arrow direction="left" size={20} />
                </button>
                <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Next image">
                  <Arrow size={20} />
                </button>
              </>
            )}
          </>
        )}
      </dialog>
    </>
  );
}

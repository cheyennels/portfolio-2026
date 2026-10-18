export function Arrow({ direction = "right", size = 16 }: { direction?: "right" | "left"; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

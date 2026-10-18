// Case studies. Each entry renders at /work/<slug>.
// Order in this array = order on the home page "Selected Work" grid (for featured ones).

export type Img = { src: string; width: number; height: number; alt: string };

export type Feature = {
  title: string;
  body: string;
  images?: Img[];
};

export type Section = {
  title: string;
  label: string; // the small right-aligned "02 / overview" text
  body: string[]; // one string per paragraph
};

export type Project = {
  slug: string;
  title: string;
  featured: boolean; // show in the home page "Selected Work" grid
  card: {
    title: string;
    summary: string;
    tags: string[];
    icon: Img;
  };
  alert: string;
  intro: string;
  heroImage?: Img;
  buttons?: { label: string; href: string; primary?: boolean }[];
  meta?: { label: string; value: string }[];
  stack?: string[];
  sections: Section[];
  features?: { title: string; label: string; items: Feature[] };
  outcome?: Section;
  next?: string; // slug of the "next case study"
  cta?: { body: string; label: string; href: string };
};

const lorem =
  "At corrupti asperiores doloribus odio. Magnam voluptates nostrum ea maiores numquam atque soluta cumque. Perferendis omnis excepturi tenetur unde nostrum est ut delectus. Ipsum ea perspiciatis voluptatem tempora. Id aut inventore sapiente.";
const loremCard =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero.";

const placeholderFeatures = (n: number): Feature[] =>
  Array.from({ length: n }, () => ({ title: "Card Title", body: loremCard }));

export const projects: Project[] = [
  {
    slug: "oink",
    title: "Oink!",
    featured: true,
    card: {
      title: "Oink! — US Bank Hackathon",
      summary: "Spending & savings tracker, 1st place and People's Choice winner.",
      tags: ["Fintech", "Team"],
      icon: { src: "/images/icon-oink.png", width: 63, height: 64, alt: "" },
    },
    // TODO: no Figma design exists for this case study yet — all placeholder.
    alert: "Case study · Hackathon · Team",
    intro: "Spending & savings tracker built at the US Bank Hackathon — 1st place and People's Choice winner.",
    meta: [
      { label: "Role", value: "Designer" },
      { label: "Platform", value: "TODO" },
      { label: "Status", value: "Hackathon winner" },
    ],
    sections: [
      { title: "The problem", label: "01 / overview", body: [lorem] },
      { title: "My role", label: "02 / process", body: [lorem] },
    ],
    features: { title: "How it works", label: "03 / key features", items: placeholderFeatures(3) },
    outcome: { title: "Outcome", label: "04 / result", body: [lorem] },
    next: "puppy-pedometer",
  },
  {
    slug: "puppy-pedometer",
    title: "Puppy Pedometer",
    featured: true,
    card: {
      title: "Puppy Pedometer",
      summary: "Gamified wellness app turning daily steps into puppy care — currently in design.",
      tags: ["UX Research", "In progress"],
      icon: { src: "/images/icon-puppy.png", width: 139, height: 82, alt: "" },
    },
    alert: "Case study · Mobile · In progress",
    intro:
      "A gamified wellness app that turns daily steps into caring for a virtual puppy. Inspired by Pikmin Bloom, Finch, Tamagotchi and Pokémon Go. Research, IA, and a pixel-art visual system are in place; the next step is applying that system to real screens.",
    heroImage: { src: "/images/puppy-hero.png", width: 495, height: 497, alt: "Puppy Pedometer pixel-art sign-up screen with a pixel puppy" },
    meta: [
      { label: "Role", value: "Solo designer & Developer" },
      { label: "Platform", value: "iOS and Android" },
      { label: "Status", value: "Low-fi complete, moving into high-fidelity" },
    ],
    sections: [
      {
        title: "The problem",
        label: "01 / overview",
        body: [
          "I wanted something that would motivate me and my friends to get outside and move, without it feeling like a chore. Most step trackers are either clinical (a number going up) or gamified in a way that feels unfulfilling. I wanted the cozy, low-stakes pull of games like Pikmin Bloom and Finch: steps turn into caring for something cute, not just points on a leaderboard.",
        ],
      },
      {
        title: "My role/discovery",
        label: "02 / process",
        body: [
          "I researched a handful of gamified wellness apps to see what worked and what didn't, then moved into moodboarding and feature definition before starting on wireframes. From there I built out low-fidelity screens; onboarding, puppy customization, step tracking, and a basic reward system.",
        ],
      },
    ],
    // TODO: the Figma still shows Not A Plane features here — replace with Puppy Pedometer features + screens.
    features: { title: "How it works", label: "03 / planned features", items: placeholderFeatures(3) },
    outcome: { title: "Outcome", label: "04 / result", body: [lorem] },
    next: "not-a-plane",
  },
  {
    slug: "not-a-plane",
    title: "Not A Plane",
    featured: true,
    card: {
      title: "Not A Plane",
      summary: "Community sighting map with live flight, planetary, and satellite data — designed and built solo.",
      tags: ["Mobile", "Full-stack"],
      icon: { src: "/images/icon-notaplane.png", width: 136, height: 69, alt: "" },
    },
    alert: "Case study · Mobile + Full stack",
    intro:
      "A community sighting map for unexplained things in the sky — with live flight, planetary, and satellite data to help people figure out what they're actually looking at.",
    heroImage: { src: "/images/notaplane-hero.png", width: 470, height: 397, alt: "Not A Plane sighting map with pixel-art alien and UFO" },
    buttons: [
      { label: "View live demo", href: "#", primary: true }, // TODO: live demo URL
      { label: "View Github", href: "#" }, // TODO: repo URL
    ],
    meta: [
      { label: "Role", value: "Solo designer & Developer" },
      { label: "Platform", value: "Web (Expo) | iOS and Android not published" },
      { label: "Status", value: "Live demo (web)" },
    ],
    stack: ["Figma", "React Native", "Expo", "Typescript", "Supabase", "Flight & Satellite APIs", "WCAG 2.1"],
    sections: [
      {
        title: "The problem",
        label: "02 / overview",
        body: [
          "People see something strange in the sky and have few credible and easy ways to check before they jump to conclusions. Was it a light? A Plane? The ISS passing overhead? Does it have an easy explanation?",
          "The communities, apps and websites that already exist are scattered and some difficult to use. I wanted to build something that will organize sightings with high quality data. Timestamp, celestial body location and flight paths to help you understand what was in the sky at that exact moment.",
        ],
      },
      {
        title: "My role",
        label: "03 / process",
        body: [
          "I designed and built this app myself in my free time. The wireframes and UI are in Figma while the app itself was built in React Native with Expo. The backend uses Supabase for auth and data (I may change these in the future!). Every screen was designed and built by me.",
        ],
      },
    ],
    features: {
      title: "How it works",
      label: "04 / key features",
      items: [
        {
          title: "Live sighting map",
          body: "A community map of reported sightings, plotted by location and time, so people can see what others nearby have reported.",
          images: [{ src: "/images/notaplane-f1.png", width: 998, height: 502, alt: "Four screens of the live sighting map" }],
        },
        {
          title: "Guided report wizard",
          body: "A structured 5-step intake flow that collects location, time, description, media, and map data instead of a free-text box, so reports stay comparable and searchable.",
          images: [
            { src: "/images/notaplane-f2a.png", width: 998, height: 502, alt: "Four steps of the report wizard" },
            { src: "/images/notaplane-f2b-1.png", width: 232, height: 644, alt: "Review and submit screen" },
            { src: "/images/notaplane-f2b-2.png", width: 232, height: 504, alt: "Analysis complete screen" },
          ],
        },
        {
          title: "Live data overlay",
          body: "Each report is automatically checked against real flight, satellite, and planetary position data for that time and place — before anyone has to guess.",
          images: [{ src: "/images/notaplane-f3.png", width: 1002, height: 493, alt: "Live flight and satellite data overlay screens" }],
        },
        {
          title: "Guest demo login",
          body: "Anonymous sign-in so anyone visiting from a portfolio link can try the full app immediately, without creating an account.",
          images: [{ src: "/images/notaplane-f4.png", width: 998, height: 493, alt: "Welcome and guest login screens" }],
        },
        {
          title: "Corroboration of sightings",
          body: "Users can corroborate reports that they also saw. This activity shows up as a notification to the poster; they are also able to see how many people have corroborated the report.",
          images: [{ src: "/images/notaplane-f5.png", width: 998, height: 493, alt: "Corroboration and notification screens" }],
        },
      ],
    },
    outcome: {
      title: "Outcome",
      label: "05 / result",
      body: [
        "Not A Plane is live and hosted as a demo. Since bringing it into my portfolio, I added the guest login and an in-app case-study page so anyone landing on it from a resume or LinkedIn link can explore the real product immediately. I do plan to add more features in the future, app store submission is also on hold while I focus on my job search.",
      ],
    },
    next: "oink",
  },
  {
    slug: "this-old-horse",
    title: "This Old Horse",
    featured: false, // shown in the home page "Right Now" card instead
    card: {
      title: "This Old Horse - Redesign",
      summary: "Nonprofit website redesign.",
      tags: ["Figma", "WCAG 2.1"],
      icon: { src: "/images/logo.png", width: 52, height: 52, alt: "" },
    },
    // TODO: placeholder content — fill in once the project kicks off.
    alert: "Current project",
    intro: lorem,
    meta: [{ label: "Organization website", value: "thisoldhorse.org" }],
    sections: [
      { title: "Header 2", label: "Sub header / date", body: [lorem] },
      { title: "Header 2", label: "Sub header / date", body: [lorem] },
    ],
    features: { title: "Header 2", label: "Sub header / date", items: placeholderFeatures(5) },
    cta: { body: lorem, label: "View Selected Works", href: "/#work" },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Case studies. Each entry renders at /work/<slug>.
// Order in this array = order on the home page "Selected Work" grid (for featured ones).
// Text marked "TODO: draft" was written from what's visible in the Figma files —
// review it and rewrite it in your own voice.

export type Img = {
  src: string;
  width: number;
  height: number;
  alt: string;
  wide?: boolean; // span the full width of the feature card
};

export type Feature = {
  title: string;
  body: string;
  images?: Img[];
  columns?: 1 | 2 | 3 | 4; // image grid columns on desktop (default 4)
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

// Puppy Pedometer phone screens (393×852 in Figma, shown at 232px wide)
const pp = (name: string, alt: string, height = 504): Img => ({
  src: `/images/pp-${name}.png`,
  width: 232,
  height,
  alt,
});

export const projects: Project[] = [
  {
    slug: "puppy-pedometer",
    title: "Puppy Pedometer",
    featured: true,
    card: {
      title: "Puppy Pedometer",
      summary: "Gamified wellness app turning daily steps into puppy care — currently in design.",
      tags: ["UX Research", "In progress"],
      icon: { src: "/images/icon-puppy.png", width: 123, height: 57, alt: "" },
    },
    alert: "Case study · Mobile · In progress",
    // TODO: draft — updated now that the high-fidelity screens exist
    intro:
      "A gamified wellness app that turns daily steps into caring for a virtual puppy. Inspired by Pikmin Bloom, Finch, Tamagotchi and Pokémon Go. Research, IA, and a pixel-art visual system led into high-fidelity designs for the full core experience.",
    heroImage: { src: "/images/puppy-hero.png", width: 495, height: 497, alt: "Puppy Pedometer pixel-art sign-up screen with a pixel puppy" },
    meta: [
      { label: "Role", value: "Solo designer & Developer" },
      { label: "Platform", value: "iOS and Android" },
      { label: "Status", value: "High-fidelity designs" }, // TODO: draft
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
    // TODO: draft — feature descriptions written from the screens and design notes in Figma
    features: {
      title: "How it works",
      label: "03 / key screens",
      items: [
        {
          title: "A cozy introduction",
          body: "Three illustrated splash screens set the tone before anything is asked of the user: your puppy is a walking buddy, moving more makes you both happier, and together you'll build habits and unlock milestones.",
          images: [
            pp("splash-1", "Splash screen: Welcome to your new adventure, with a pixel corgi"),
            pp("splash-2", "Splash screen: a sleeping puppy under a starry sky"),
            pp("splash-3", "Splash screen: a puppy beside a stone lantern under cherry blossoms"),
          ],
        },
        {
          title: "Sign up and verification",
          body: "A short account flow with clear inline errors, a six-digit email code, and a celebratory confirmation screen before the user meets their puppy.",
          images: [
            pp("login", "Login or sign up screen"),
            pp("signup-error", "Sign up form showing inline password errors"),
            pp("verify-code", "Check your email screen with a six-digit code entry"),
            pp("verified", "You're verified confirmation screen"),
          ],
        },
        {
          title: "Adopt your puppy",
          body: "Users pick a puppy (each with its own flavor text and a default name), set daily, weekly and monthly step goals with easy defaults, and choose an environment — Tokyo Garden, Rolling Hills or Space.",
          images: [
            pp("pick-puppy", "Choose your puppy screen with a puppy carousel"),
            pp("choose-goals", "Set step goals screen"),
            pp("choose-bg", "Choose a background screen"),
            pp("home-modal", "Home screen with a welcome modal"),
          ],
        },
        {
          title: "A puppy that reflects your progress",
          body: "The home screen is the core loop: your puppy's mood and message change with your step progress, from thrilled to hoping you'll take her for a walk, in every environment.",
          images: [
            pp("home-great", "Home screen: Sakura is thrilled to see you"),
            pp("home-ok", "Home screen: Sakura wants to play and walk"),
            pp("home-bad", "Home screen: Sakura is bummed"),
            pp("home-space", "Home screen in the Space environment"),
          ],
        },
        {
          title: "Health data, customization and settings",
          body: "An adventure log charts daily, weekly and monthly steps, goals can be adjusted any time, earned accessories dress up your puppy (tap to equip, no save button), and settings include color themes and accessible text.",
          images: [
            pp("adventure-log", "Adventure log with daily, weekly and monthly step charts", 625),
            pp("customize", "Puppy wardrobe screen with equipped items"),
            pp("change-item", "Hats screen for choosing an accessory"),
            pp("settings", "Settings screen"),
          ],
        },
      ],
    },
    outcome: {
      title: "Outcome",
      label: "04 / next steps",
      // TODO: draft
      body: [
        "The high-fidelity designs now cover onboarding, account creation, puppy setup, the home screen's mood states, health data, customization and settings. Next up is testing the open questions I noted along the way — like whether a welcome modal is needed on such a simple home screen.",
      ],
    },
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
      icon: { src: "/images/icon-notaplane.png", width: 117, height: 54, alt: "" },
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
          images: [{ src: "/images/notaplane-f1.png", width: 998, height: 502, alt: "Four screens of the live sighting map", wide: true }],
        },
        {
          title: "Guided report wizard",
          body: "A structured 5-step intake flow that collects location, time, description, media, and map data instead of a free-text box, so reports stay comparable and searchable.",
          images: [
            { src: "/images/notaplane-f2a.png", width: 998, height: 502, alt: "Four steps of the report wizard", wide: true },
            { src: "/images/notaplane-f2b-1.png", width: 232, height: 644, alt: "Review and submit screen" },
            { src: "/images/notaplane-f2b-2.png", width: 232, height: 504, alt: "Analysis complete screen" },
          ],
        },
        {
          title: "Live data overlay",
          body: "Each report is automatically checked against real flight, satellite, and planetary position data for that time and place — before anyone has to guess.",
          images: [{ src: "/images/notaplane-f3.png", width: 1002, height: 493, alt: "Live flight and satellite data overlay screens", wide: true }],
        },
        {
          title: "Guest demo login",
          body: "Anonymous sign-in so anyone visiting from a portfolio link can try the full app immediately, without creating an account.",
          images: [{ src: "/images/notaplane-f4.png", width: 998, height: 493, alt: "Welcome and guest login screens", wide: true }],
        },
        {
          title: "Corroboration of sightings",
          body: "Users can corroborate reports that they also saw. This activity shows up as a notification to the poster; they are also able to see how many people have corroborated the report.",
          images: [{ src: "/images/notaplane-f5.png", width: 998, height: 493, alt: "Corroboration and notification screens", wide: true }],
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
    next: "this-old-horse",
  },
  {
    slug: "this-old-horse",
    title: "This Old Horse",
    featured: true,
    card: {
      title: "This Old Horse — Redesign",
      summary: "Untangling a horse rescue nonprofit's website so adopters, donors, and volunteers can find what they need.", // TODO: draft
      tags: ["Web", "Nonprofit"],
      icon: { src: "/images/icon-toh.png", width: 48, height: 64, alt: "" },
    },
    alert: "Case study · Web · In progress",
    intro:
      "A horse rescue and retirement nonprofit in Hastings, MN. I used to volunteer here on weekends and did some events. The current Wix site has grown into a maze of nested pages that is difficult to navigate. I’m redesigning the website so adopters, donors, and volunteers can easily find what they need.",
    heroImage: { src: "/images/toh-hero.jpg", width: 520, height: 260, alt: "Redesigned This Old Horse home page hero with horses and a Plutarch quote" },
    meta: [
      { label: "Role", value: "UX/UI Designer" }, // TODO: confirm
      { label: "Organization website", value: "thisoldhorse.org" },
      { label: "Status", value: "Hi-fi mockups in progress" }, // TODO: draft
    ],
    stack: ["Figma", "WCAG 2.1"],
    sections: [
      {
        title: "The problem",
        label: "01 / overview",
        // TODO: draft
        body: [
          "This Old Horse cares for horses across several partner locations and runs programs like Wild Hearts Mustangs — but on the current site, that information is buried in nested pages. People who want to adopt, foster, sponsor, donate or volunteer have to dig to find the right place to start.",
        ],
      },
      {
        title: "My process",
        label: "02 / process",
        // TODO: draft
        body: [
          "I started with photo research and hand-drawn layout sketches, mapping out every section of the site: Home, About, Locations, Programs, How to Help, Support the Mission, News & Events and Contact. Those became grey-box wireframes on a 12-column grid (20px gutters, 40px margins), then high-fidelity mockups built from a small set of reusable components — heroes, image/text sections, cards and a shared navigation.",
        ],
      },
    ],
    // TODO: draft
    features: {
      title: "How it works",
      label: "03 / design",
      items: [
        {
          title: "Sketching the new structure",
          body: "Paper sketches of every page, with notes on what each section needs to do and how pages connect — like card grids for locations and programs, and single pages for each horse, location or program.",
          images: [{ src: "/images/toh-sketches.jpg", width: 998, height: 303, alt: "Four pages of hand-drawn layout sketches", wide: true }],
        },
        {
          title: "From wireframe to high fidelity",
          body: "The home page went from a grey-box wireframe to a warm, photo-led design in cream, navy and barn red — with a donate button always in the navigation.",
          columns: 2,
          images: [
            { src: "/images/toh-lofi-home.jpg", width: 487, height: 939, alt: "Low-fidelity home page wireframe" },
            { src: "/images/toh-home.jpg", width: 487, height: 992, alt: "High-fidelity home page mockup" },
          ],
        },
        {
          title: "Clear paths for every visitor",
          body: "Key pages are built from the same scannable patterns: How to Help splits foster, adopt and sponsor into cards; Our Locations lists every partner farm; and Wild Hearts tells each mustang's story in a card grid.",
          columns: 3,
          images: [
            { src: "/images/toh-help.jpg", width: 317, height: 823, alt: "How to Help page mockup" },
            { src: "/images/toh-locations.jpg", width: 317, height: 684, alt: "Our Locations page mockup" },
            { src: "/images/toh-mustangs.jpg", width: 317, height: 633, alt: "Wild Hearts mustang stories page mockup" },
          ],
        },
      ],
    },
    outcome: {
      title: "Outcome",
      label: "04 / next steps",
      // TODO: draft
      body: [
        "High-fidelity mockups are underway for the main sections of the site. A few screens are on hold until I can pull the final copy from the current website.",
      ],
    },
    next: "green-stone",
  },
  {
    slug: "green-stone",
    title: "Green Stone",
    featured: true,
    // Copy below is drawn from greenstonecoop.com. Lines marked "TODO: draft" are mine — please review.
    card: {
      title: "Green Stone Co-op",
      summary: "Live site for Ely's community-owned coworking, climbing and sauna co-op.",
      tags: ["Web", "Live site"],
      icon: { src: "/images/icon-greenstone.png", width: 39, height: 64, alt: "" },
    },
    alert: "Case study · Web · Community co-op",
    intro:
      "Ely's community-owned third place: a planned downtown space with coworking, an adjustable Kilter Board, saunas and a kitchenette — owned by the people who use it. I co-founded the project and designed its website to gather interest before anything gets built.", // TODO: draft — confirm your role
    heroImage: { src: "/images/gs-live-hero.jpg", width: 520, height: 274, alt: "Greenstone Co-op website hero with a climbing photo" },
    buttons: [{ label: "Visit greenstonecoop.com", href: "https://greenstonecoop.com/", primary: true }],
    meta: [
      { label: "Role", value: "Co-founder & designer" }, // TODO: confirm (did you also build it?)
      { label: "Platform", value: "Website" },
      { label: "Status", value: "Live · interest check" },
    ],
    stack: ["Figma"], // TODO: add whatever the live site is built with
    sections: [
      {
        title: "The goal",
        label: "01 / overview",
        // TODO: draft — summarised from the live site
        body: [
          "Ely has no climbing gym or coworking space within about 100 miles, and in winter the sun is gone before five. Greenstone is a plan to change that: a warm downtown place to work, climb, sauna and run into people, organized as a co-op.",
          "Because the co-op signs no lease and collects no money until 100 people have pledged, the website's job is to earn those pledges. It has to explain the idea, make the co-op model easy to understand, show a realistic timeline, and turn interest into action through an interest survey, a call for steering-committee members and a contact form.",
        ],
      },
      {
        title: "My process",
        label: "02 / process",
        // TODO: draft
        body: [
          "I started with a content outline and a neutral wireframe, gathered photography of climbing walls and coworking spaces, then designed a branded mockup around the Green Stone logo with a forest green, rust and cream palette.",
          "Taking it live, the content grew to answer the questions people actually had: a dedicated “How a co-op works” section, a step-by-step timeline from interest check to open doors, and a “Who we are” section introducing the two of us behind it.",
        ],
      },
    ],
    features: {
      title: "How it works",
      label: "03 / design",
      items: [
        {
          title: "Wireframe → mockup → live site",
          body: "The page structure was worked out in a neutral wireframe, carried into a branded mockup, then refined with real content for launch.",
          columns: 3,
          images: [
            { src: "/images/gs-wireframe.jpg", width: 317, height: 1005, alt: "Full-page wireframe" },
            { src: "/images/gs-mockup.jpg", width: 317, height: 958, alt: "Full-page branded mockup" },
            { src: "/images/gs-live-full.jpg", width: 317, height: 1295, alt: "Full page of the live greenstonecoop.com site" },
          ],
        },
        {
          title: "A hero that asks for action",
          body: "The name, tagline and a short summary of the plan — Greenstone Studio in fall 2027, then a bouldering gym — with “Take the Interest Survey” in the header from the first second.",
          images: [{ src: "/images/gs-live-hero.jpg", width: 998, height: 525, alt: "Live site hero section", wide: true }],
        },
        {
          title: "Why Ely, and what's inside",
          body: "Color-blocked panels make the case — long winters, the nearest wall or desk 100 miles away, hundreds of students and seasonal workers — then lay out the four parts of the space: work, play, recover and social.",
          images: [
            { src: "/images/gs-live-why.jpg", width: 998, height: 495, alt: "Why section of the live site", wide: true },
            { src: "/images/gs-live-what.jpg", width: 998, height: 579, alt: "What is it section of the live site", wide: true },
          ],
        },
        {
          title: "Making the co-op model clear",
          body: "Four numbered steps explain how ownership works: members own it, one member gets one vote, the first 100 pledges become founding members, and nothing happens until there are 100 pledges.",
          images: [{ src: "/images/gs-live-coop.jpg", width: 998, height: 563, alt: "How a co-op works section of the live site", wide: true }],
        },
        {
          title: "A timeline people can follow",
          body: "Six steps from the interest check happening now to Greenstone Climbing in 2028–29, with the current step highlighted so visitors know exactly where things stand.",
          images: [{ src: "/images/gs-live-timeline.jpg", width: 998, height: 570, alt: "Planned timeline section of the live site", wide: true }],
        },
        {
          title: "Who we are, and how to get involved",
          body: "A personal introduction and a call for five to seven steering-committee members, followed by a simple contact form for questions, building leads and ideas.",
          images: [
            { src: "/images/gs-live-who.jpg", width: 998, height: 544, alt: "Who we are section of the live site", wide: true },
            { src: "/images/gs-live-contact.jpg", width: 998, height: 497, alt: "Contact form section of the live site", wide: true },
          ],
        },
      ],
    },
    outcome: {
      title: "Outcome",
      label: "04 / where it stands",
      // TODO: draft
      body: [
        "The site is live at greenstonecoop.com and supporting step one of the plan: an interest survey, information sessions, and recruiting a steering committee to take on bylaws, financing and the building search.",
      ],
    },
    next: "puppy-pedometer",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// All site copy lives here. Edit this file (and projects.ts) to update content —
// no layout code needs to change. Anything marked TODO is still placeholder.

export const site = {
  name: "Cheyenne Smith",
  title: "Cheyenne Smith — UX/UI Designer",
  description:
    "UX/UI designer with seven years of design and front-end development experience.",
  email: "cheyenneleesmith@gmail.com",
  links: {
    github: "https://github.com/", // TODO: your GitHub profile URL
    linkedin: "https://www.linkedin.com/", // TODO: your LinkedIn profile URL
    resume: "/Cheyenne-Smith-Resume.pdf", // replace this file in /public to update the download
  },
};

export const home = {
  hero: {
    heading: "Seven years of design and development.",
    accent: "Now, just design.",
    body: "I design clean, accessible interfaces and the design systems behind them. After seven years building front ends, I design with the code in mind, so handoffs are smooth and what ships matches the mockup.",
  },
  rightNow: {
    updated: "Updated August 2026",
    eyebrow: "In progress",
    title: "This Old Horse - Redesign",
    body: "A horse rescue and retirement nonprofit in Hastings, MN. I used to volunteer here on weekends and did some events. The current Wix site has grown into a maze of nested pages that is difficult to navigate. I’m redesigning the website so adopters, donors, and volunteers can easily find what they need.",
    status: "Hi-fi mockups underway", // TODO: draft
    toolkit: ["Figma", "WCAG 2.1"],
    href: "/work/this-old-horse",
  },
};

export const resume = {
  alert: "Resume & contact",
  heading: "The journey so far: design, development, and back to design.",
  body: "I started in graphic design, transitioned into UX/UI and spent the last three years designing and developing the front end for multiple projects. I’m looking to go back to my design roots - while maintaining my ability to work closely with engineers.",
  emailNote:
    "Usually reply within a day or two. This is the fastest way to reach me — for a role, contract work, or just to talk shop.",
  contactLinks: [
    { label: "Github", description: "Code, side projects and commit history", href: site.links.github },
    { label: "LinkedIn", description: "Work history and recommendations", href: site.links.linkedin },
    { label: "Portfolio", description: "Selected case studies and current work", href: "/#work" },
  ],
  skills: [
    {
      group: "Design",
      items: [
        "Figma",
        "Wireframing",
        "Clickable prototypes",
        "Design systems",
        "User personas",
        "User journey mapping",
        "Accessible UX/UI (WCAG 2.1)",
        "Adobe creative suite",
      ],
    },
    {
      group: "Front-end",
      items: ["React", "React Native", "Typescript", "Next.js", "Storybook", "HTML/CSS", "Javascript", "Bootstrap"],
    },
    {
      group: "Other",
      items: ["User interviews", "A/B testing", "Design thinking", "Git", "Shopify/Liquid", "Squarespace", "Agile", "Wordpress"],
    },
  ],
  experienceRange: "2018 - 2025",
  experience: [
    {
      role: "Front-End Developer & Designer",
      company: "Compoze Labs · 2022 – 2025",
      body: "Designed a sales-training app for a venture-funded tech startup, and designed and developed applications for a major packaging manufacturer in Minnesota. Designed and built a component-based design system in Storybook (React + Chakra UI) that kept UI consistent across projects and cut development time, applied WCAG 2.1 accessibility standards across client products, and partnered with designers and engineers to shorten handoff time.",
    },
    {
      role: "Front-End Developer",
      company: "KRUTSCH · 2021 – 2022",
      body: "Turned internal design assets into a reusable design system (Material UI, Storybook, React), speeding up developer onboarding. Built client front ends in React Native, Swift and Svelte with a consistent visual design across platforms, plus custom Shopify storefront components and styles in Liquid.",
    },
    {
      role: "Web Designer (Contract)",
      company: "W2 Films · 2020",
      body: "Designed microsites for nonprofit fundraising galas that moved online during COVID: event sites, promotional web assets and livestream viewing pages. Helped major nonprofits raise over $3 million in 6 months while in-person fundraising events weren't possible.",
    },
    {
      role: "Graphic Designer (Contract)",
      company: "Mlatino · 2020",
      body: "Designed billboards, web ads, brochures, social media content, video graphics and other print materials for COVID public-health campaigns, helping the Hispanic community stay informed about social distancing and masking guidance.",
    },
    {
      role: "UX/UI Tutor & TA",
      company: "Trilogy Education Services (2U) · 2020 – 2021",
      body: "Mentored cohorts of 20–30 students one-on-one in UX/UI fundamentals, HTML/CSS, JavaScript and Git, and gave feedback on group projects.",
    },
    {
      role: "Graphic Designer",
      company: "Minneapolis Community & Technical College · 2018 – 2020",
      body: "Designed advertisements, web ads, brochures, flyers and social graphics for school events and campaigns within the college's brand guidelines.",
    },
    {
      role: "Graphic Design Intern",
      company: "Can Do Canines · 2018 – 2019",
      body: "Designed branded print pieces, digital graphics, web ads and social media content in Photoshop, Illustrator and InDesign.",
    },
  ],
};

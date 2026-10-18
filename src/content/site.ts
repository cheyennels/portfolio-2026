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
    resume: "/resume.pdf", // TODO: drop your resume PDF into /public/resume.pdf
  },
};

export const home = {
  hero: {
    heading: "Seven years of design and development.",
    accent: "Now, just design.",
    body: "I design interfaces in Figma, build clickable prototypes, and design systems, with the front-end fluency to know what actually ships well. I'm looking for UX/UI and design roles to put that toolkit to work.",
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
  experienceRange: "2019 - 2026",
  experience: [
    {
      role: "Engineer II, UX/UI Designer - 3.5 years",
      company: "Compoze Labs",
      body: "Designed UI and clickable prototypes in Figma for mobile and web app features, then built the front-end myself before handing off to full-stack engineers. Built a component-based design system in Storybook (React + Chakra UI) that cut inconsistencies across projects, and implemented WCAG 2.1 accessibility standards that improved client satisfaction scores.",
    },
    {
      role: "Front End Developer - 2 years",
      company: "KRUTSCH",
      body: "Converted internal design assets into a reusable design system (Material UI, Storybook, React) and delivered production-ready front-ends across React Native, Swift, and Svelte for client applications. Built custom Shopify storefronts using Liquid for e-commerce clients.",
    },
    {
      role: "UX/UI Tutor and TA - 1 year",
      company: "2U Education",
      body: "Mentored cohorts of 20–30 students 1:1 in UX/UI fundamentals, HTML/CSS, JavaScript, and Git — helping them design, build, and ship their own portfolio-ready projects.",
    },
    {
      role: "Web Designer - 1 year",
      company: "W2 Films (Contractor)",
      body: "Designed micro sites for live streamed gala events during COVID; including the event website, promotional web assets to advertise it, and the livestream viewing site itself. Helping organizations move fundraising galas online almost overnight.",
    },
    {
      role: "Graphic Design Assistant - 2 years",
      company: "Minneapolis Community and Technical College",
      body: "Designed branded marketing materials, including brochures, flyers, and social graphics, for school events and campaigns, building foundational design skills under the college's brand guidelines.",
    },
  ],
};

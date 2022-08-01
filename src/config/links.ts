import { LinkType } from "types";

export let headerLinks: LinkType[] = [
  { link: "/use-cases", label: "Use cases" },
  { link: "/features", label: "Features" },
  { link: "/jobs", label: "Jobs" },
  {
    link: "https://portal.sizzy.co/download",
    label: "Download",
    isExternal: true,
  },
  {
    link: "https://portal.sizzy.co/pricing",
    label: "Pricing",
    isExternal: true,
  },
  { link: "https://docs.sizzy.co", label: "Docs", isExternal: true },
  {
    link: "https://glink.so/sizzy/roadmap",
    label: "Roadmap",
    isExternal: true,
  },
  { link: "https://portal.sizzy.co/login", label: "Login", isExternal: true },
  { link: "https://glink.so/sizzy", label: "Changelog", isExternal: true },
];

export let footerLinks: LinkType[] = [
  { link: "/privacy", label: "Privacy" },
  { link: "/terms", label: "Terms and Conditions" },
];

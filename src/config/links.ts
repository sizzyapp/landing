import { LinkType } from "types";

export let headerLinks: LinkType[] = [
  {
    link: "/use-cases",
    label: "Use cases",
  },
  { link: "/features", label: "Features" },
  { link: "/jobs", label: "Jobs" },
  { link: "/vs-other-browsers", label: "Comparison" },
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
];

export let footerLinks: LinkType[] = [
  { link: "/privacy", label: "Privacy" },
  { link: "/terms", label: "Terms and Conditions" },
];

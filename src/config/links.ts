import { LinkType } from "types";
import { allJobs } from "contentlayer/generated";

let docs = {
  link: "https://docs.sizzy.co",
  label: "Docs",
  isExternal: true,
};

let roadmap = {
  link: "https://glink.so/sizzy/roadmap",
  label: "Roadmap",
  isExternal: true,
};

let blog = {
  link: "/blog",
  label: "Blog",
};

let changelog = {
  link: "https://glink.so/sizzy",
  label: "Changelog",
  isExternal: true,
};

let jobs = { link: "/jobs", label: "Jobs", counter: allJobs.length };
let about = { link: "/about", label: "About" };

let login = {
  link: "https://portal.sizzy.co/login",
  label: "Login",
  isExternal: true,
};

export let headerLinks: LinkType[] = [
  /*{
    link: "/use-cases",
    label: "Use cases",
  },*/
  { link: "/features", label: "Features" },
  { link: "/customers", label: "Customers" },
  // { link: "/vs-other-browsers", label: "Comparison" },
  {
    link: "https://portal.sizzy.co/download",
    label: "Download",
    isExternal: true,
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  about,
  jobs,
];

export let learnPopupLinks = [docs, roadmap, changelog, blog];
export let companyLinks = [about, jobs];
export const mobileLinks: LinkType[] = [...headerLinks, ...learnPopupLinks, login];

export let footerLinks: LinkType[] = [
  { link: "/privacy", label: "Privacy" },
  { link: "/terms", label: "Terms and Conditions" },
];

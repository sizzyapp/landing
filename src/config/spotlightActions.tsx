import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import { mobileLinks } from "config/links";
import { allFeatures, allJobs, allUseCases } from "contentlayer/generated";
import { useRouter } from "next/router";
import React from "react";
import {
  FaBriefcase,
  FaGlobe,
  FaHome,
  FaRocket,
  FaSearch,
  FaWrench,
} from "react-icons/fa";
import { RealReactFC } from "types";

export const Spotlight: RealReactFC<{}> = ({ children }) => {
  const { push } = useRouter();
  const spotlightActions: SpotlightAction[] = [
    {
      title: "Home",
      description: "Get to home page",
      onTrigger: () => push("/"),
      icon: <FaHome size={18} />,
    },
    {
      title: "Privacy",
      onTrigger: () => push("/privacy"),
      icon: <FaGlobe size={18} />,
    },
    {
      title: "Terms & Conditions",
      onTrigger: () => push("/terms"),
      icon: <FaGlobe size={18} />,
    },
    ...mobileLinks
      .filter((l) => !l.isExternal)
      .map((l) => ({
        title: l.label,
        onTrigger: () => push(l.link),
        icon: <FaGlobe size={18} />,
      })),
    ...allFeatures.map((f) => ({
      title: `Feature: ${f.title}`,
      description: `${f.description}`,
      onTrigger: () => push(f.url),
      icon: <FaRocket size={18} />,
    })),
    ...allUseCases.map((u) => ({
      title: `Use case: ${u.title}`,
      onTrigger: () => push(u.url),
      icon: <FaWrench size={18} />,
    })),
    ...allJobs.map((j) => ({
      title: `Job: ${j.title}`,
      onTrigger: () => push(j.url),
      icon: <FaBriefcase size={18} />,
    })),
  ];

  return (
    <SpotlightProvider
      actions={spotlightActions}
      searchIcon={<FaSearch />}
      searchPlaceholder="Search..."
      shortcut={["mod + P", "mod + K", "/"]}
      nothingFoundMessage="Nothing found..."
    >
      {children}
    </SpotlightProvider>
  );
};

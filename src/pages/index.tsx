import type { NextPage } from "next";
import { AppShell } from "@mantine/core";
import { Hero } from "components/Hero";
import { ResponsiveHeader } from "../components/Header";
import Benefits from "../components/Benefits";

const Home: NextPage = () => {
  return (
    <AppShell
      header={
        <ResponsiveHeader
          links={[
            { link: "https://portal.sizzy.co/download", label: "Download" },
            { link: "https://portal.sizzy.co/pricing", label: "Pricing" },
            { link: "https://docs.sizzy.co", label: "Docs" },
            { link: "https://glink.so/sizzy/roadmap", label: "Roadmap" },
            { link: "https://sizzy.co/use-cases", label: "Use cases" },
            { link: "https://portal.sizzy.co/login", label: "Login" },
            { link: "https://glink.so/sizzy", label: "Changelog" },
          ]}
        />
      }
    >
      <Hero />
      <Benefits />
    </AppShell>
  );
};

export default Home;

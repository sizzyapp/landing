import type { NextPage } from "next";
import { AppShell } from "@mantine/core";
import { Hero } from "components/Hero";
import { ResponsiveHeader } from "../components/Header";
import Benefits from "../components/Benefits";
import FInalSlide from "../components/FInalSlide";
import { FooterSimple } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <AppShell
      sx={{
        "&:selection": {
          backgroundColor: "red",
        },
      }}
      header={
        <ResponsiveHeader
          links={[
            { link: "https://portal.sizzy.co/download", label: "Download" },
            { link: "https://portal.sizzy.co/pricing", label: "Pricing" },
            { link: "https://docs.sizzy.co", label: "Docs" },
            { link: "https://glink.so/sizzy/roadmap", label: "Roadmap" },
            // { link: "https://sizzy.co/use-cases", label: "Use cases" },
            { link: "https://portal.sizzy.co/login", label: "Login" },
            { link: "https://glink.so/sizzy", label: "Changelog" },
          ]}
        />
      }
      footer={
        <FooterSimple
          links={[
            { link: "/privacy", label: "Privacy" },
            { link: "/terms", label: "Terms and Conditions" },
          ]}
        />
      }
    >
      <Hero />
      <Benefits />
      <FInalSlide />
    </AppShell>
  );
};

export default Home;

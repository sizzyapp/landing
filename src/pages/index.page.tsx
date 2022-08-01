import type { NextPage } from "next";
import { AppShell } from "@mantine/core";
import { Hero } from "components/Hero";
import { ResponsiveHeader } from "components/Header";
import Benefits from "components/Benefits";
import FinalSlide from "components/FinalSlide";
import { FooterSimple } from "components/Footer";
import { headerLinks, footerLinks } from "config/links";

const Home: NextPage = () => {
  return (
    <AppShell
      sx={{
        "&:selection": {
          backgroundColor: "red",
        },
      }}
      header={<ResponsiveHeader />}
      footer={<FooterSimple links={footerLinks} />}
    >
      <Hero />
      <Benefits />
      <FinalSlide />
    </AppShell>
  );
};

export default Home;

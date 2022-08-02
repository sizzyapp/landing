import type { NextPage } from "next";
import { AppShell } from "@mantine/core";
import { Hero } from "components/Hero";
import { ResponsiveHeader } from "components/Header";
import Benefits from "components/Benefits";
import FinalSlide from "components/FinalSlide";
import { FooterSimple } from "components/Footer";
import { headerLinks, footerLinks } from "config/links";

export const defaultAppShellProps = {
  sx: {
    "&:selection": {
      backgroundColor: "red",
    },
  },
  styles: {
    main: {
      paddingTop: 15,
    },
  },
  header: <ResponsiveHeader />,
  footer: <FooterSimple links={footerLinks} />,
};

const Home: NextPage = () => {
  return (
    <AppShell {...defaultAppShellProps}>
      <Hero />
      <Benefits />
      <FinalSlide />
    </AppShell>
  );
};

export default Home;

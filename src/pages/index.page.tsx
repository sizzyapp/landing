import Benefits from "components/Benefits";
import DevtoolsLogos from "components/DevtoolsLogos";
import FinalSlide from "components/FinalSlide";
import { Hero } from "components/Hero/hero";
import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import React from "react";
import { Vertical } from "styles/layout-components";

const Home: NextPage<{ logos?: string[] }> = ({ logos = [] }) => {
  return (
    <Shell padding={0} wrapper={false}>
      <Hero />
      <Wrapper>
        <Vertical fullW spacing={100}>
          <Benefits />
          <DevtoolsLogos logos={logos} />
        </Vertical>
        <FinalSlide />
      </Wrapper>
    </Shell>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fs = require("fs");
    const path = require("path");
    const logosPath = path.join(process.cwd(), "public", "devtools-logos");
    const logos = fs.readdirSync(logosPath);

    return { props: { logos } };
  } catch (error) {
    console.log(error);
    return { props: { logos: [] } };
  }
};

export default Home;

import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import { map } from "lodash";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import React from "react";
import Benefits from "sections/BenefitsSection/Benefits";
import FinalSlide from "sections/FinalSlide";
import GraphSection from "sections/GraphSection";
import { Hero } from "sections/HeroSection/hero";
import SpecializedTools from "sections/SpecializedToolsSection";
import { Vertical } from "styles/layout-components";
import MainImageSection from "../sections/MainImageSection/mainImageSection";
import { useMediaQuery } from "@mantine/hooks";
import { mqStrings } from "../styles/responsive";
import { Tweet } from "../components/SocialProof/types";

const Home: NextPage<{ logos?: string[]; tweets: Tweet[] }> = ({ logos = [], tweets = [] }) => {
  let spaceBetweenSections = 150;
  const isPhone = useMediaQuery(`${mqStrings.maxWidth(500)}`);

  return (
    <Shell padding={0} wrapper={false}>
      <Vertical spacing={spaceBetweenSections}>
        <Vertical fullW>
          <Hero tweets={tweets} />
          {!isPhone && (
            <Wrapper padding={true} maxWidth={1400}>
              <MainImageSection />
            </Wrapper>
          )}
        </Vertical>
        <Wrapper>
          <Vertical fullW spacing={spaceBetweenSections} id="content-section">
            <SpecializedTools />
            <Benefits />
            <Wrapper spacing="xl" center padding={true} id="graph-section" maxWidth={1000}>
              <GraphSection />
            </Wrapper>
            {/*<DevtoolsLogos logos={logos} />*/}
          </Vertical>
          <FinalSlide />
        </Wrapper>
      </Vertical>
    </Shell>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fs = require("fs");
    const path = require("path");
    const logosPath = path.join(process.cwd(), "public", "devtools-logos");
    const logos = fs.readdirSync(logosPath);
    const tweets = JSON.parse(fs.readFileSync("./tweets.json", "utf8"));
    let mappedTweets = map(tweets, (t) => t);
    return { props: { logos, tweets: mappedTweets } };
  } catch (error) {
    console.log(error);
    return { props: { logos: [] } };
  }
};

export default Home;

import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import { tweetIds } from "config/tweets";
import { map } from "lodash";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import React from "react";
import Benefits from "sections/BenefitsSection/Benefits";
import DevtoolsLogos from "sections/DevtoolsLogos";
import FinalSlide from "sections/FinalSlide";
import GraphSection from "sections/GraphSection";
import { Hero } from "sections/HeroSection/hero";
import MainImageSection from "sections/MainImageSection/mainImageSection";
import SpecializedTools from "sections/SpecializedToolsSection";
import { Vertical } from "styles/layout-components";
import { TransformedTweet } from "types/tweet";
import { getTweets } from "utils/get-tweets";

const Home: NextPage<{ logos?: string[]; tweets: TransformedTweet[] }> = ({
  logos = [],
  tweets = [],
}) => {
  let spaceBetweenSections = 150;
  return (
    <Shell padding={0} wrapper={false}>
      <Vertical spacing={spaceBetweenSections}>
        <Vertical fullW>
          <Hero tweets={tweets} />
          {/*<Wrapper padding={true} maxWidth={1400}>*/}
          {/*  <MainImageSection />*/}
          {/*</Wrapper>*/}
        </Vertical>
        <Wrapper>
          <Vertical fullW spacing={spaceBetweenSections}>
            <SpecializedTools />
            <Benefits />
            <Wrapper
              spacing="xl"
              center
              padding={true}
              id="graph-section"
              maxWidth={1000}
            >
              <GraphSection />
            </Wrapper>
            <DevtoolsLogos logos={logos} />
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
    const tweets = await getTweets(tweetIds);
    let mappedTweets = map(tweets, (t) => t);
    return { props: { logos, tweets: mappedTweets } };
  } catch (error) {
    console.log(error);
    return { props: { logos: [] } };
  }
};

export default Home;

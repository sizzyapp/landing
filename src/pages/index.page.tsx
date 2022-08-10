import Benefits from "sections/BenefitsSection/Benefits";
import DevtoolsLogos from "sections/DevtoolsLogos";
import FinalSlide from "sections/FinalSlide";
import Graph from "sections/GraphSection";
import { Hero } from "sections/HeroSection/hero";
import Shell from "components/Shell";
import SpecializedTools from "sections/SpecializedToolsSection";
import Wrapper from "components/Wrapper";
import { tweetIds } from "config/tweets";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import React from "react";
import { Vertical } from "styles/layout-components";
import { TransformedTweet } from "types/tweet";
import { getTweets } from "utils/get-tweets";
import { map } from "lodash";

const Home: NextPage<{ logos?: string[]; tweets: TransformedTweet[] }> = ({
  logos = [],
  tweets = [],
}) => {
  let spaceBetweenSections = 150;
  return (
    <Shell padding={0} wrapper={false}>
      <Vertical spacing={spaceBetweenSections}>
        <Hero tweets={tweets} />
        <Wrapper>
          <Vertical fullW spacing={spaceBetweenSections}>
            <SpecializedTools />
            <Benefits />
            <Wrapper center padding={true} id="graph-section" maxWidth={1000}>
              <Graph />
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

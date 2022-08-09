import Benefits from "components/Benefits";
import DevtoolsLogos from "components/DevtoolsLogos";
import FinalSlide from "components/FinalSlide";
import Graph from "components/GraphSection";
import { Hero } from "components/Hero/hero";
import Shell from "components/Shell";
import SpecializedTools from "components/SpecializedTools";
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
            <Graph />
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

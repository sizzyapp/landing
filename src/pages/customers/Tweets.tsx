import MagicGrid from "components/MagicGrid";
import TweetComponent from "components/Tweet/Tweet";
import { orderBy, take } from "lodash";
import React from "react";
import { ReactFC } from "types";
import type { Tweet } from "components/SocialProof/types";

export const orderTweets = (tweets: Tweet[]) => orderBy(tweets, (t) => t.favorite_count, ["desc"]);

const Tweets: ReactFC<{ tweets: Tweet[]; limit?: number }> = ({ tweets = [], limit = 99 }) => {
  const sortedTweets = orderTweets(tweets);
  console.log("sortedTweets", sortedTweets);
  return (
    <MagicGrid gap={30}>
      {take(sortedTweets, limit).map((t) => (
        <TweetComponent tweet={t} />
      ))}
    </MagicGrid>
  );
};

export default Tweets;

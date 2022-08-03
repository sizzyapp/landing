import MagicGrid from "components/MagicGrid";
import Tweet from "components/Tweet/Tweet";
import orderBy from "lodash/orderBy";
import { TransformedTweet } from "types/tweet";
import map from "lodash/map";
import React from "react";
import { RealReactFC } from "types";

const Tweets: RealReactFC<{ tweets: TransformedTweet[] }> = ({ tweets }) => {
  const sortedTweets = orderBy(tweets, (t) => t.public_metrics.like_count, [
    "desc",
  ]);
  return (
    <MagicGrid gap={30}>
      {map(sortedTweets, (t) => (
        <Tweet tweet={t} />
      ))}
    </MagicGrid>
  );
};

export default Tweets;

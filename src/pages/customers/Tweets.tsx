import MagicGrid from "components/MagicGrid";
import Tweet from "components/Tweet/Tweet";
import { orderBy, take } from "lodash";
import { TransformedTweet } from "types/tweet";
import React from "react";
import { RealReactFC } from "types";

const Tweets: RealReactFC<{ tweets: TransformedTweet[]; limit?: number }> = ({
  tweets = [],
  limit = 99,
}) => {
  const sortedTweets = orderBy(tweets, (t) => t.public_metrics.like_count, [
    "desc",
  ]);
  return (
    <MagicGrid gap={30}>
      {take(sortedTweets, limit).map((t) => (
        <Tweet tweet={t} />
      ))}
    </MagicGrid>
  );
};

export default Tweets;

import qs from "qs";
import { RawTweetType, TransformedTweet, TweetData } from "../types/tweet";

type ID = string | number;

export const getTweets = async (ids: ID[]) => {
  let expansions =
    "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id";
  let tweetFields =
    "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text";
  let userFields = "id,name,profile_image_url,protected,url,username,verified";
  let mediaFields =
    "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics";

  const queryParams = qs.stringify({
    ids: ids.map((i) => i.toString()).join(","),
    expansions: expansions,
    "tweet.fields": tweetFields,
    "user.fields": userFields,
    "media.fields": mediaFields,
  });

  console.log("queryParams", queryParams);

  const response = await fetch(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  const tweets = (await response.json()) as RawTweetType;

  console.log("tweets", tweets);

  const getAuthorInfo = (author_id: string) => {
    return tweets.includes.users.find((user) => user.id === author_id)!;
  };

  const getReferencedTweets = (mainTweet: TweetData) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet) => {
        const fullReferencedTweet = tweets.includes.tweets.find(
          (tweet) => tweet.id === referencedTweet.id
        )!;

        return {
          ...fullReferencedTweet,
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
        };
      }) || []
    );
  };

  return tweets.data.reduce(
    (allTweets: Record<string, TransformedTweet>, tweet: TweetData) => {
      const tweetWithAuthor = {
        ...tweet,
        media:
          tweet?.attachments?.media_keys.map((key) =>
            tweets.includes.media.find((media) => media.media_key === key)
          ) || [],
        referenced_tweets: getReferencedTweets(tweet),
        author: getAuthorInfo(tweet.author_id),
      };

      // @ts-ignore @MaximeHeckel: somehow media types are conflicting
      allTweets[tweet.id] = tweetWithAuthor;

      return allTweets;
    },
    {} as Record<string, TransformedTweet>
  );
};

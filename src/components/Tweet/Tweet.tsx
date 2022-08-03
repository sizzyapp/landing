import { Anchor, Card, Group, Image, Stack, Text } from "@mantine/core";
import { TransformedTweet } from "types/tweet";
import { LikeIcon, ReplyIcon, RetweetIcon, TwitterLogo } from "./Icons";
import { ActionIcons, Avatar } from "./Styles";

interface Props {
  tweet: TransformedTweet;
}

const Tweet = (props: Props) => {
  const { tweet } = props;

  if (!tweet) return null;

  const {
    author,
    media,
    created_at,
    public_metrics,
    id,
    text,
    referenced_tweets,
  } = tweet;

  const authorUrl = `https://twitter.com/${author.username}`;
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
  const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;

  const formattedText = text.replace(/https:\/\/[\n\S]+/g, "");

  let avatarSize = 46;

  let icons = (
    <Group>
      <ActionIcons href={replyUrl} target="_blank" rel="noopener noreferrer">
        <ReplyIcon />
        <Text>{public_metrics.reply_count}</Text>
      </ActionIcons>
      <ActionIcons href={retweetUrl} target="_blank" rel="noopener noreferrer">
        <RetweetIcon />
        <Text>{public_metrics.retweet_count}</Text>
      </ActionIcons>
      <ActionIcons href={likeUrl} target="_blank" rel="noopener noreferrer">
        <LikeIcon />
        <Text>{public_metrics.like_count}</Text>
      </ActionIcons>
    </Group>
  );

  let avatarAndName = (
    <Group>
      <Group spacing={5}>
        <Avatar href={authorUrl} target="_blank" rel="noopener noreferrer">
          <Image
            sx={{
              height: avatarSize,
              width: avatarSize,
              borderRadius: "100%",
              overflow: "hidden",
            }}
            alt={author.username}
            height={avatarSize}
            width={avatarSize}
            src={author.profile_image_url.replace("_normal", "")}
          />
        </Avatar>
        <Stack spacing={0}>
          <Text
            sx={(t) => ({
              fontSize: 17,
              fontWeight: "bold",
              color: t.colors.gray[8],
            })}
            title={author.name}
          >
            {author.name}
          </Text>
          <Text sx={(t) => ({ fontSize: 15, color: t.colors.gray[7] })}>
            @{author.username}
          </Text>
        </Stack>
      </Group>
      <Anchor
        sx={{ marginLeft: "auto" }}
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterLogo />
      </Anchor>
    </Group>
  );

  return (
    <Card shadow="md">
      {avatarAndName}

      <Text sx={(t) => ({ flex: 1, color: t.colors.gray[7] })}>
        {formattedText}
      </Text>

      <Stack spacing={5}>{icons}</Stack>
    </Card>
  );
};

export default Tweet;

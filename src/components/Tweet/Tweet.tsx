import { Anchor, Card, Group, Image, Stack } from "@mantine/core";
import { RealReactFC } from "types";
import { TransformedTweet } from "types/tweet";
import { LikeIcon, ReplyIcon, RetweetIcon, TwitterLogo } from "./Icons";
import { ActionIcons } from "./Styles";
import Text from "components/mantine/Text";

const Tweet: RealReactFC<{
  tweet: TransformedTweet;
}> = ({ tweet }) => {
  if (!tweet) return null;

  const { author, public_metrics, id, text } = tweet;

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

  let nameAndUsername = (
    <Stack spacing={0}>
      <Text
        sx={(t) => ({
          fontSize: 17,
          lineHeight: "17px",
          fontWeight: "bold",
          color: t.colors.gray[8],
        })}
      >
        {author.name}
      </Text>
      <Text color="gray.7" fontSize={15}>
        @{author.username}
      </Text>
    </Stack>
  );
  let avatar = (
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
  );
  let avatarAndName = (
    <Anchor
      underline={false}
      href={authorUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Group spacing={10}>
        <Group spacing={5}>
          {avatar}
          {nameAndUsername}
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
    </Anchor>
  );

  return (
    <Card shadow="md">
      <Stack sx={{ height: "100%" }} spacing={10}>
        {avatarAndName}

        <Text
          sx={(t) => ({
            flex: 1,
            fontSize: 15,
            lineHeight: "23px",
            color: t.colors.gray[9],
          })}
        >
          {formattedText}
        </Text>

        <Stack spacing={5}>{icons}</Stack>
      </Stack>
    </Card>
  );
};

export default Tweet;

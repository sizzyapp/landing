import { Anchor, Card, Group, Image, Stack } from "@mantine/core";
import { ReactFC } from "types";
import { LikeIcon, ReplyIcon, RetweetIcon, TwitterLogo } from "./Icons";
import { ActionIcons } from "./Styles";
import Text from "components/mantine/Text";
import { Tweet } from "../SocialProof/types";
import { cleanName, cleanTweet } from "../SocialProof/utils";
import { Vertical } from "../../styles/layout-components";

const Tweet: ReactFC<{
  tweet: Tweet;
}> = ({ tweet }) => {
  if (!tweet) return null;

  const { user, favorite_count, reply_count, retweet_count, id, full_text: text } = tweet;
  const username = user.screen_name;
  const name = cleanName(user.name);

  const authorUrl = `https://twitter.com/${username}`;
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
  const tweetUrl = `https://twitter.com/${username}/status/${id}`;

  const formattedText = cleanTweet(text);

  let avatarSize = 46;

  let icons = (
    <Group>
      <ActionIcons href={replyUrl} target="_blank" rel="noopener noreferrer">
        <ReplyIcon />
        <Text>{reply_count}</Text>
      </ActionIcons>
      <ActionIcons href={retweetUrl} target="_blank" rel="noopener noreferrer">
        <RetweetIcon />
        <Text>{retweet_count}</Text>
      </ActionIcons>
      <ActionIcons href={likeUrl} target="_blank" rel="noopener noreferrer">
        <LikeIcon />
        <Text>{favorite_count}</Text>
      </ActionIcons>
    </Group>
  );

  let nameAndUsername = (
    <Vertical spacing={6}>
      <Text
        sx={(t) => ({
          fontSize: 17,
          lineHeight: "17px",
          fontWeight: "bold",
          color: t.colors.gray[8],
        })}
      >
        {name}
      </Text>
      <Text color="gray.7" fontSize={15}>
        @{username}
      </Text>
    </Vertical>
  );
  let avatar = (
    <Image
      sx={{
        height: avatarSize,
        width: avatarSize,
        borderRadius: "100%",
        overflow: "hidden",
      }}
      alt={username}
      height={avatarSize}
      width={avatarSize}
      src={user.profile_image_url_https}
    />
  );
  let avatarAndName = (
    <Anchor underline={false} href={authorUrl} target="_blank" rel="noopener noreferrer">
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
    <Card shadow="md" withBorder>
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

        {/*<Stack spacing={5}>{icons}</Stack>*/}
      </Stack>
    </Card>
  );
};

export default Tweet;

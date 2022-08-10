import { Anchor, Avatar, Text, ThemeIcon } from "@mantine/core";
import { NextLink } from "@mantine/next";
import Laurel from "sections/HeroSection/Laurel";
import Tooltip from "components/Tooltip";
import { uniqBy } from "lodash";
import { orderTweets } from "pages/customers/Tweets";
import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { Horizontal, Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { TransformedTweet } from "types/tweet";

const TweetAvatars: RealReactFC<{ tweets: TransformedTweet[] }> = ({
  tweets,
}) => {
  return (
    <Anchor className="sizzy-pink-3" component={NextLink} href="/customers">
      <Avatar.Group sx={{ width: "100%", maxWidth: 600, flexWrap: "wrap" }}>
        {orderTweets(uniqBy(tweets, (t) => t.author_id)).map((t) => (
          <Tooltip
            label={
              <Vertical spacing={0}>
                <b>@{t.author.username}</b>
                <div>{t.text}</div>
              </Vertical>
            }
          >
            <Avatar
              size="lg"
              radius={9999}
              src={t.author.profile_image_url.replace("_normal", "")}
            />
          </Tooltip>
        ))}
      </Avatar.Group>
    </Anchor>
  );
};

const Award: RealReactFC<{ title: string }> = ({ children, title }) => {
  let laurelSize = 40;
  let phIcon = (
    <ThemeIcon
      sx={{
        width: "auto",
        height: "auto",
        background: "none",
        color: "#da5530",
      }}
    >
      <FaProductHunt fontSize={25} />
    </ThemeIcon>
  );
  return (
    <Anchor underline={false} href="https://www.producthunt.com/products/sizzy">
      <Horizontal center spacing={0}>
        <Laurel size={laurelSize} />
        <Horizontal spacing="sm">
          {phIcon}
          <Vertical spacing={0} center>
            <Text size="xs" sx={(t) => ({ color: t.colors.gray[8] })}>
              {children}
            </Text>
            <Text
              sx={(t) => ({ color: t.colors.gray[8] })}
              size="sm"
              weight="bold"
            >
              {title}
            </Text>
          </Vertical>
        </Horizontal>

        <Laurel mirror={true} size={laurelSize} />
      </Horizontal>
    </Anchor>
  );
};

const SocialProof: RealReactFC<{ tweets: TransformedTweet[] }> = ({
  tweets,
}) => {
  return (
    <Vertical className="sizzy-teal-4" spacing="xl" fullW center>
      <Horizontal className="sizzy-red-3" center>
        <Award title="1st">Product of the day</Award>
        <Award title="1st">Product of the week</Award>
        <Award title="3rd">Product of the month</Award>
      </Horizontal>
      <Vertical center spacing="sm">
        <Text sx={(t) => ({ color: t.colors.gray[7] })}>
          <i> Developers love it, and you will too </i>
        </Text>
        <TweetAvatars tweets={tweets} />
      </Vertical>
    </Vertical>
  );
};

export default SocialProof;

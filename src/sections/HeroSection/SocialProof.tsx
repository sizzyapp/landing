import { Anchor, Avatar, Image, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import Laurel from "sections/HeroSection/Laurel";
import Tooltip from "components/Tooltip";
import { uniqBy } from "lodash";
import { orderTweets } from "pages/customers/Tweets";
import React from "react";
import { Horizontal, Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { TransformedTweet } from "types/tweet";

const TweetAvatars: RealReactFC<{ tweets: TransformedTweet[] }> = ({ tweets }) => {
  return (
    <Anchor className="sizzy-pink-3" component={NextLink} href="/customers">
      <Avatar.Group spacing="xs" sx={{ width: "100%", maxWidth: 670, flexWrap: "wrap" }}>
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
              size={44}
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
  let laurelSize = 30;

  return (
    <Horizontal center spacing={0}>
      <Laurel size={laurelSize} />
      <Horizontal spacing="sm">
        <Vertical spacing={0} center>
          <Text sx={(t) => ({ color: t.colors.gray[8] })} size="sm" weight={800}>
            {title}
          </Text>
          <Text size="xs" sx={(t) => ({ color: t.colors.gray[8] })}>
            {children}
          </Text>
        </Vertical>
      </Horizontal>

      <Laurel mirror={true} size={laurelSize} />
    </Horizontal>
  );
};

const SocialProof: RealReactFC<{ tweets: TransformedTweet[] }> = ({ tweets }) => {
  return (
    <Vertical className="sizzy-teal-4" spacing="lg" fullW center>
      <Horizontal className="sizzy-red-3" center>
        <Image width={125} src="/images/product-hunt-logo-horizontal-orange.png" />
        <Award title="#1">Product of the day</Award>
        <Award title="#1">Product of the week</Award>
        <Award title="#3">Product of the month</Award>
      </Horizontal>
      <Vertical center spacing={5}>
        <TweetAvatars tweets={tweets} />
        <Text color="gray.7" size="lg">
          <i> Developers love it, and you will too!</i>
        </Text>
      </Vertical>
    </Vertical>
  );
};

export default SocialProof;

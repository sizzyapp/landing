import { ReactFC } from "../../types";
import { Vertical } from "../../styles/layout-components";
import { Image, Text } from "@mantine/core";
import React from "react";
import { Tweet } from "./types";
import { Award } from "./Award";
import { TweetAvatars } from "./TweetAvatars";

export const SocialProof: ReactFC<{ tweets: Tweet[] }> = ({ tweets }) => {
  return (
    <Vertical className="sizzy-teal-4" spacing="lg" fullW center>
      <div className="vertical center space-y-4 sm:horizontal sm:space-x-4 sm:space-y-0">
        <Image width={125} src="/images/product-hunt-logo-horizontal-orange.png" />
        <Award title="#1">Product of the day</Award>
        <Award title="#1">Product of the week</Award>
        <Award title="#3">Product of the month</Award>
      </div>
      <Vertical center spacing={5}>
        <TweetAvatars tweets={tweets} />
        <Text color="gray.7" size="lg">
          <i> Developers love it, and you will too!</i>
        </Text>
      </Vertical>
    </Vertical>
  );
};

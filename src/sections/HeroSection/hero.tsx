import { Text } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import DownloadButton from "components/DownloadButton";
import React from "react";
import SocialProof from "sections/HeroSection/SocialProof";

import { useStyles } from "sections/HeroSection/styles";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { TransformedTweet } from "types/tweet";

export const Hero: RealReactFC<{ tweets: TransformedTweet[] }> = ({
  tweets,
}) => {
  const { classes } = useStyles();
  return (
    <Vertical fullW className={`${classes.wrapper} sizzy-red-3`}>
      <Vertical>
        <Vertical
          fullW
          center
          spacing="xl"
          className={`${classes.inner} sizzy-teal-3`}
        >
          {/*<Image src="/logo.png" className={`${classes.logo}`} />*/}
          <Vertical
            fullW
            spacing="lg"
            center
            className={`${classes.content} sizzy-green-3`}
          >
            <BadassTitle>
              The <Highlight>all-in-one</Highlight> toolkit for web development
            </BadassTitle>
            <Text className={classes.description} align="center">
              <b style={{ fontWeight: 900 }}>Before Sizzy:</b> web development
              is stressing you out, responsive design is hard, you have an
              overwhelming amount of opened tabs and apps. <br />
              <b style={{ fontWeight: 900 }}>After Sizzy:</b> all the tools you
              need are in one place, responsive design is a breeze, no more
              context switching.
            </Text>
          </Vertical>

          <SocialProof tweets={tweets} />

          <Vertical center spacing={10}>
            <DownloadButton label="Download for free" />
            <Text size="sm" sx={(t) => ({ color: t.colors.gray[8] })}>
              No credit card required
            </Text>
          </Vertical>
        </Vertical>
      </Vertical>
    </Vertical>
  );
};
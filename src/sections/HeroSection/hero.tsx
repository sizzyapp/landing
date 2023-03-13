import { Button, Text } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import DownloadButton from "components/DownloadButton";
import React from "react";
import SocialProof from "sections/HeroSection/SocialProof";

import { useStyles } from "sections/HeroSection/styles";
import { Horizontal, Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { TransformedTweet } from "types/tweet";
import { trackButtonClick } from "utils/utils";

export const Hero: RealReactFC<{ tweets: TransformedTweet[] }> = ({ tweets }) => {
  const { classes } = useStyles();
  return (
    <Vertical center fullW className={`${classes.wrapper} sizzy-red-3`}>
      <Vertical fullW>
        <Vertical fullW center spacing="xl" className={`${classes.inner} sizzy-teal-3`}>
          {/*<Image src="/logo.png" className={`${classes.logo}`} />*/}
          <Vertical fullW spacing="lg" center>
            <BadassTitle maxWidth={800}>
              <Highlight>The</Highlight> browser for web developers
            </BadassTitle>
            <Vertical center className={classes.content} spacing="sm">
              <Text className={classes.description} align="center">
                <b style={{ fontWeight: 900 }}>Before Sizzy:</b> web development is stressing you
                out, responsive design is hard, you have an overwhelming amount of opened tabs and
                apps.
              </Text>
              <Text className={classes.description} align="center">
                <b style={{ fontWeight: 900 }}>After Sizzy:</b> all the tools you need are in one
                place, responsive design is a breeze, no more context switching.
              </Text>
            </Vertical>
          </Vertical>

          <SocialProof tweets={tweets} />

          <Horizontal align="start" position="center">
            <Vertical center spacing={10}>
              <DownloadButton size="lg" />
            </Vertical>
            <Button
              onClick={() => {
                const section = document.querySelector("#content-section");
                section.scrollIntoView({ behavior: "smooth" });
                trackButtonClick("Convince Me");
              }}
              radius="xl"
              variant="outline"
              size="lg"
            >
              Convince Me
            </Button>
          </Horizontal>
        </Vertical>
      </Vertical>
    </Vertical>
  );
};

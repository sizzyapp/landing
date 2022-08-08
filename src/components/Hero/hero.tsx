import { Container, Image, Text, Title } from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import SocialProof from "components/Hero/SocialProof";
import React from "react";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { TransformedTweet } from "types/tweet";

import { useStyles } from "./styles";

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
            <Title align="center" id="sizzy-text" className={classes.title}>
              The <span className={`${classes.highlight}`}>all-in-one</span>{" "}
              toolkit for web development
            </Title>
            <Text className={classes.description} align="center">
              <b>Before Sizzy:</b> web development is stressing you out,
              responsive design is hard, you have an overwhelming amount of
              opened tabs and apps. <b>After Sizzy:</b> all the tools you need
              are in one place, responsive design is a breeze, no more context
              switching.
            </Text>
          </Vertical>

          <SocialProof tweets={tweets} />

          <Vertical center spacing={10}>
            <DownloadButton label="Download for free" />
            <Text size="sm" sx={(t) => ({ color: t.colors.gray[8] })}>
              No credit card required
            </Text>
          </Vertical>
          {/*<Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => {
                  const benefits = document.querySelector("#benefits");
                  benefits?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  trackButtonClick("Convince Me");
                }}
              >
                Convince Me
              </Button>*/}
        </Vertical>
      </Vertical>
    </Vertical>
  );
};

import {
  Button,
  Center,
  Container,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import React from "react";
import { trackButtonClick } from "utils/utils";

import { useStyles } from "./styles";

export const Hero = () => {
  const { classes } = useStyles();
  return (
    <Container>
      <Center className={classes.wrapper}>
        <Group spacing={60} className={`${classes.inner}`}>
          <Image src="/logo.png" className={`${classes.logo}`} />
          <div className={`${classes.content}`}>
            <Title id="sizzy-text" className={classes.title}>
              <span className={`${classes.highlight}`}>Ship</span> your websites
              faster
            </Title>
            <Text mt="md" className={`${classes.subtitle}`}>
              The last developer tool you need.
            </Text>
            <Text
              mt="sm"
              sx={{
                opacity: 0.6,
              }}
            >
              <b>Develop, debug and test</b> your website with ease and speed.{" "}
              <b>Intuitive and quick </b> development tools help you focus on
              your product and ideas.
            </Text>

            <Group mt={30}>
              <DownloadButton className={classes.control} />
              <Button
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
              </Button>
            </Group>
          </div>
        </Group>
      </Center>
    </Container>
  );
};

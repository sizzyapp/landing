import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Center,
} from "@mantine/core";
import image from "assets/logo.png";
import { HEADER_HEIGHT } from "components/Header";
import DownloadButton from "components/DownloadButton";
import { trackButtonClick } from "utils/utils";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan("md")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
    },
    [theme.fn.smallerThan("sm")]: {
      paddingTop: 0,
      paddingBottom: theme.spacing.xl * 2,
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  subtitle: {
    fontSize: theme.fontSizes.xl * 1.3,
    lineHeight: 1.2,
    opacity: 0.8,
    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.xl,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: 300,
    [theme.fn.smallerThan("md")]: {
      margin: theme.spacing.md,
      maxWidth: 250,
    },
    [theme.fn.smallerThan("sm")]: {
      margin: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 200,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <Container>
      <Center
        sx={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <Group spacing={60} className={classes.inner}>
          <Image src={image.src} className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>Ship</span> your websites
              faster
            </Title>
            <Text mt="md" className={classes.subtitle}>
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
}

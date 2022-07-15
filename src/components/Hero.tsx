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
  useMantineTheme,
} from "@mantine/core";
import image from "assets/logo.png";
import { HEADER_HEIGHT } from "components/Header";

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
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
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

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      margin: theme.spacing.md,
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
  const { colors } = useMantineTheme();
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
            <Text
              sx={{
                opacity: 0.6,
              }}
              mt="md"
            >
              <b>A browser</b>, and more! <br />
              {"A developer's "}
              <b>ultimate toolkit.</b> <br />
              <b>Develop, debug and test</b> your website with ease and speed.{" "}
              <b>Intuitive and quick </b> development tools help you focus on
              your product and ideas.
            </Text>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                variant="gradient"
                gradient={{ from: colors.purple[4], to: colors.pink[6] }}
                className={classes.control}
              >
                Download Now
              </Button>
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

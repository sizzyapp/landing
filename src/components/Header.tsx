import {
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Paper,
  Title,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { headerLinks } from "config/links";
import NextLink from "next/link";
import React, { useState } from "react";
import { RealReactFC } from "types";
import { trackButtonClick } from "utils/utils";

export const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

export const ResponsiveHeader: RealReactFC<{}> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState<string>();
  const { classes, cx } = useStyles();

  const items = headerLinks.map((link) => (
    <a
      {...(link.isExternal && {
        target: "_blank",
        rel: "noreferrer",
      })}
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
        close();
        trackButtonClick(link.label);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <NextLink href="/">
          <Group
            sx={{
              cursor: "pointer",
              flexWrap: "nowrap",
              justifyContent: "space-around",
            }}
            spacing={10}
          >
            <Image sx={{ width: 30, height: 30 }} src="/logo.png" />
            <Title order={3} sx={(t) => ({ color: t.colors.dark[4] })}>
              Sizzy
            </Title>
          </Group>
        </NextLink>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={open}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

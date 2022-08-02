import {
  Burger,
  Button,
  Container,
  Group,
  Header,
  Image,
  Paper,
  Title,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import HeaderLink from "components/HeaderLink";
import { HeaderMenu } from "components/HeaderMenu";
import { headerLinks } from "config/links";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RealReactFC } from "types";
import { useStyles } from "./styles";

export const HEADER_HEIGHT = 60;

export const ResponsiveHeader: RealReactFC<{}> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const { route } = useRouter();

  const items = headerLinks.map((link) => (
    <HeaderLink
      activeRoute={route}
      link={link}
      key={link.link}
      closeMenu={close}
    />
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
        <Group spacing={0} className={classes.links}>
          {items}
          <HeaderMenu
            title="Learn"
            links={[
              {
                link: "https://docs.sizzy.co",
                label: "Docs",
                isExternal: true,
              },
              {
                link: "https://glink.so/sizzy/roadmap",
                label: "Roadmap",
                isExternal: true,
              },
              {
                link: "https://glink.so/sizzy",
                label: "Changelog",
                isExternal: true,
              },
            ]}
          />
        </Group>

        <NextLink href="https://portal.sizzy.co/login" passHref>
          <Button
            className={classes.links}
            size="sm"
            rel="noopener"
            target="_blank"
            component="a"
            variant="light"
          >
            Log in
          </Button>
        </NextLink>

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

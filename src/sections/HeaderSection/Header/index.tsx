import {
  Anchor,
  Burger,
  Button,
  Container,
  Group,
  Header,
  Image,
  Menu,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  companyLinks,
  headerLinks,
  learnPopupLinks,
  mobileLinks,
} from "config/links";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useStyles } from "sections/HeaderSection/Header/styles";
import HeaderLink from "sections/HeaderSection/HeaderLink";
import { HeaderMenu } from "sections/HeaderSection/HeaderMenu";
import { RealReactFC } from "types";

export const HEADER_HEIGHT = 60;

export type HeaderProps = {
  isFixed?: boolean;
  shadow?: boolean;
  blurry?: boolean;
};

export let headerShadow = "0 0 11px 0px rgb(0 0 0 / 8%)";

export const ResponsiveHeader: RealReactFC<HeaderProps> = ({
  isFixed,
  shadow = true,
  blurry = true,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles({ blurry });
  const { route } = useRouter();

  return (
    <Header
      sx={{
        position: "fixed",
        top: 0,
        transition: "all 100ms linear",
        ...(isFixed && shadow && { boxShadow: headerShadow }),
      }}
      height={HEADER_HEIGHT}
      className={classes.root}
    >
      <Container className={classes.header}>
        <NextLink href="/" passHref>
          <Anchor variant="text">
            <Group
              sx={{
                cursor: "pointer",
                flexWrap: "nowrap",
                justifyContent: "space-around",
              }}
              spacing={10}
            >
              <Image
                sx={{ width: 30, maxWidth: 30, maxHeight: 30, height: 30 }}
                src="/logo.png"
              />
              <Title order={3} sx={(t) => ({ color: t.colors.dark[4] })}>
                Sizzy
              </Title>
            </Group>
          </Anchor>
        </NextLink>
        <Group spacing={0} className={classes.links}>
          {headerLinks.map((link) => (
            <HeaderLink
              key={link.link}
              activeRoute={route}
              link={link}
              closeMenu={close}
            />
          ))}
          <HeaderMenu title="Learn" links={learnPopupLinks} />
          <HeaderMenu title="Company" links={companyLinks} />
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

        <Menu
          onChange={(o) => (o === true ? open() : close())}
          shadow="md"
          width="100%"
        >
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={open}
              className={classes.burger}
              size="sm"
            />
          </Menu.Target>

          <Menu.Dropdown>
            {mobileLinks.map((link) => (
              <NextLink key={link.link} passHref href={link.link}>
                <Menu.Item component="a">{link.label}</Menu.Item>
              </NextLink>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Container>
    </Header>
  );
};

import {
  Anchor,
  Burger,
  Button,
  Container,
  Group,
  Header,
  Image,
  Menu,
  Title, Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { headerLinks, learnPopupLinks, mobileLinks } from "config/links";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useStyles } from "sections/HeaderSection/Header/styles";
import HeaderLink from "sections/HeaderSection/HeaderLink";
import { HeaderMenu } from "sections/HeaderSection/HeaderMenu";
import { RealReactFC } from "types";
import {GradientBorderButton} from "../../../components/GradientBorderButton";

export const HEADER_HEIGHT = 60;

export const ResponsiveHeader: RealReactFC<{}> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const { route } = useRouter();

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
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
              <Image sx={{ width: 30, maxWidth: 30, maxHeight: 30, height: 30 }} src="/logo.png" />
              <Title order={3} sx={(t) => ({ color: t.colors.dark[4] })}>
                Sizzy
              </Title>
            </Group>
          </Anchor>
        </NextLink>
        <Group spacing={0} className={classes.links}>
          {headerLinks.map((link) => (
            <HeaderLink key={link.link} activeRoute={route} link={link} closeMenu={close} />
          ))}
          <HeaderMenu title="Learn" links={learnPopupLinks} />
          <Tooltip multiline={true} label={<div>
            Master Fast-Paced Fullstack Development. <br/> Finally ship that product!
          </div>} position="bottom" withArrow>
          <div>
            <GradientBorderButton>
              Zero To Shipped
            </GradientBorderButton>
          </div>
          </Tooltip>
          {/*<HeaderMenu title="Company" links={companyLinks} />*/}
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

        <Menu onChange={(o) => (o === true ? open() : close())} shadow="md" width="100%">
          <Menu.Target>
            <Burger opened={opened} onClick={open} className={classes.burger} size="sm" />
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

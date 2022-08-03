import { createStyles } from "@mantine/core";
import HeaderButton from "components/HeaderButton";
import Conditional from "conditional-wrap";
import NextLink from "next/link";
import React from "react";
import { LinkType, RealReactFC } from "types";
import { trackButtonClick } from "utils/utils";

const useStyles = createStyles(
  (theme, { isActive }: { isActive?: boolean }) => ({
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
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 3 : 7
          ],
      },
    },
  })
);

const HeaderLink: RealReactFC<{
  link: LinkType;
  activeRoute: string;
  closeMenu: () => void;
}> = ({ closeMenu, link, activeRoute }) => {
  const isActive =
    link.link === activeRoute || `${link.link}/[slug]` === activeRoute;

  return (
    <Conditional
      condition={!link.isExternal}
      wrap={(c) => (
        <NextLink href={link.link} passHref>
          {c}
        </NextLink>
      )}
    >
      <HeaderButton
        size="xs"
        component="a"
        {...(link.isExternal && {
          target: "_blank",
          rel: "noreferrer",
          href: link.link,
        })}
        {...(isActive && {
          sx: (theme) => ({ color: theme.colors.purple[6] }),
        })}
        onClick={() => {
          closeMenu();
          trackButtonClick(link.label);
        }}
      >
        {link.label}
      </HeaderButton>
    </Conditional>
  );
};

export default HeaderLink;

import { Group } from "@mantine/core";
import React from "react";
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";
import { fixedHeight, fixedWidth } from "styled-mixins";

import { mqStrings, smaller, widths } from "styles/responsive";
import { RealReactFC } from "types";

export const MediaQuery: React.FC<{ query: string; children: any }> = ({
  query,
  children,
}) => {
  const mq = window.matchMedia(query);
  const [matches, setMatches] = React.useState(mq.matches);
  React.useEffect(() => {
    let callback = ({ matches }) => setMatches(matches);
    mq.addListener(callback);
    return () => mq.removeListener(callback);
  }, []);
  return typeof children === "function"
    ? children(matches)
    : matches
    ? children
    : null;
};

export const HideWhenSmaller: React.FC<{ width: number; children: any }> = ({
  children,
  width,
}) => <MediaQuery query={mqStrings.minWidth(width)}>{children}</MediaQuery>;

export const ShowWhenSmaller: React.FC<{ width: number; children: any }> = ({
  children,
  width,
}) => <MediaQuery query={mqStrings.maxWidth(width)}>{children}</MediaQuery>;

export const NoLink: RealReactFC<{ href: string; as?: string }> = ({
  children,
  href,
  as,
}) => (
  <NextLink href={href} as={as}>
    <Link margin="auto" w="full" _hover={{ textDecoration: "none" }}>
      {children}
    </Link>
  </NextLink>
);

export const Spacer = ({ children }) => <> {children} </>;

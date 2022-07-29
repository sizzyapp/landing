import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";
import { fixedHeight, fixedWidth } from "styled-mixins";

import { Vertical } from "chakra-layout-components";
import { mqStrings, smaller, widths } from "styles/responsive";
import { RealReactFC } from "types";

export { Vertical, Horizontal } from "chakra-layout-components";

export const spaceUnit = 1;

export const Space = styled.div<{ size: number }>(({ size = 1 }) => ({
  ...fixedHeight(spaceUnit * size),
  ...fixedWidth(spaceUnit * size),
}));

export const ContactLink = styled.a({
  color: "#877edc",
  textDecoration: "none",
  paddingBottom: 3,
  borderBottom: "1px dashed #877edc",
});

export const Wrapper = styled(Vertical)<{ medium?: boolean; large?: boolean }>(
  {
    maxWidth: 1030,
    width: "100%",
    margin: "0 auto",
    paddingLeft: 50,
    paddingRight: 50,
    ...smaller(widths.mobile, {
      paddingLeft: 25,
      paddingRight: 25,
    }),
    ...smaller(widths.mobileSmall, {
      paddingLeft: 15,
      paddingRight: 15,
    }),
  },
  ({ medium, large }) => ({
    ...(medium && {
      maxWidth: 800,
    }),
    ...(large && {
      maxWidth: 1500,
    }),
  })
);

export const DeviceImage = styled.img``;

export const ShadowRadiusWrapper = styled.div({
  position: "relative",
  overflow: "hidden",
  borderRadius: 5,
  boxShadow: "0 0 100px 0 rgba(0, 0, 0, 0.3)",
});

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

export const Countdown = styled.div({
  margin: "auto",
  fontWeight: "bold",
  fontSize: 30,
});

export const PlainLink = styled.a({
  textDecoration: "none",
  color: "white",
});

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

export const Circle = ({ children, size = 80, ...rest }) => {
  const actualSize = `${size}px`;
  return (
    <Vertical
      {...rest}
      bg="white"
      center
      borderRadius={100}
      height={actualSize}
      width={actualSize}
      maxHeight={actualSize}
      maxWidth={actualSize}
      minHeight={actualSize}
      minWidth={actualSize}
    >
      {children}
    </Vertical>
  );
};

export const PrimaryButton = styled(Button)({});

PrimaryButton.defaultProps = {
  h: "auto",
  px: 30,
  py: 15,
  w: "full",
  borderRadius: "md",
  border: "none",
  colorScheme: "purple",
  tabIndex: 0,
  fontWeight: "normal",
};

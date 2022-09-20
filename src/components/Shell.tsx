import { AppShell, AppShellProps } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { Spotlight } from "components/Spotlight";
import Wrapper, { WrapperProps } from "components/Wrapper";
import Conditional from "conditional-wrap";
import { footerLinks } from "config/links";
import React from "react";
import { ReactGenieAnimations } from "react-genie-with-emotion";
import { FooterSimple } from "sections/Footer";
import {
  HEADER_HEIGHT,
  HeaderProps,
  ResponsiveHeader,
} from "sections/HeaderSection/Header";
import { RealReactFC } from "types";

const Shell: RealReactFC<
  AppShellProps & {
    wrapper?: boolean;
    wrapperProps?: Partial<WrapperProps>;
    headerProps?: Partial<HeaderProps>;
    padding?: number;
  }
> = ({ children, wrapperProps, headerProps, wrapper = true, padding }) => {
  const [scroll] = useWindowScroll();
  let fixedHeader = scroll.y >= HEADER_HEIGHT;

  return (
    <AppShell
      header={<ResponsiveHeader isFixed={fixedHeader} {...headerProps} />}
      footer={<FooterSimple links={footerLinks} />}
      styles={(theme) => ({
        main: {
          padding: 50,
          marginTop: HEADER_HEIGHT,
          [theme.fn.smallerThan("sm")]: {
            padding: 20,
          },
          ...(padding !== undefined && { padding }),
        },
      })}
      sx={{
        sx: {
          "&:selection": {
            backgroundColor: "red",
          },
        },
      }}
    >
      <Conditional
        condition={wrapper}
        wrap={(children) => <Wrapper {...wrapperProps}>{children}</Wrapper>}
      >
        <Spotlight>
          <ReactGenieAnimations />
          {/*@ts-ignore*/}
          {children}
        </Spotlight>
      </Conditional>
    </AppShell>
  );
};

export default Shell;

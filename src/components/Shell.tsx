import { AppShell, AppShellProps, Text } from "@mantine/core";
import { Spotlight } from "components/Spotlight";
import Wrapper, { WrapperProps } from "components/Wrapper";
import Conditional from "conditional-wrap";
import { footerLinks } from "config/links";
import dynamic from "next/dynamic";
import React from "react";
import { ReactGenieAnimations } from "react-genie-with-emotion";
import { FooterSimple } from "sections/Footer";
import { ResponsiveHeader } from "sections/HeaderSection/Header";
import { Horizontal, Vertical } from "styles/layout-components";
import { RealReactFC } from "types";

const CookieNotice = dynamic(() => import("components/CookieNotice"), { ssr: false });

const Shell: RealReactFC<
  AppShellProps & {
    wrapper?: boolean;
    wrapperProps?: Partial<WrapperProps>;
    padding?: number;
  }
> = ({ children, wrapperProps, wrapper = true, padding }) => {
  return (
    <AppShell
      header={
        <Vertical fullW>
          <Horizontal center fullW sx={{ backgroundColor: "black", height: 30 }} color="white">
            <Text sx={{ textAlign: "center", fontWeight: "bold" }} color="white">
              🔥 Black Friday Sale - 50% off 🔥
            </Text>
          </Horizontal>
          <ResponsiveHeader />
        </Vertical>
      }
      footer={<FooterSimple links={footerLinks} />}
      styles={(theme) => ({
        main: {
          padding: 50,
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

      <CookieNotice />
    </AppShell>
  );
};

export default Shell;

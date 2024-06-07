import { AppShell, AppShellProps, Text } from "@mantine/core";
import { Spotlight } from "components/Spotlight";
import Wrapper, { WrapperProps } from "components/Wrapper";
import Conditional from "conditional-wrap";
import { discountText, HAS_DISCOUNT } from "config/discount";
import { footerLinks } from "config/links";
import dynamic from "next/dynamic";
import React from "react";
import { ReactGenieAnimations } from "react-genie-with-emotion";
import { FooterSimple } from "sections/Footer";
import { ResponsiveHeader } from "sections/HeaderSection/Header";
import { Horizontal, Vertical } from "styles/layout-components";
import { ReactFC } from "types";
import { PPP } from "../sections/HeaderSection/PPP";
import Link from "next/link";

const CookieNotice = dynamic(() => import("components/CookieNotice"), { ssr: false });

const Shell: ReactFC<
  AppShellProps & {
    wrapper?: boolean;
    wrapperProps?: Partial<WrapperProps>;
    padding?: number;
  }
> = ({ children, wrapperProps, wrapper = true, padding }) => {
  let SaleBanner = (
    <Link href="/pricing">
      <Horizontal
        center
        fullW
        sx={{
          backgroundColor: "black",
          cursor: "pointer",
          height: 50,
        }}
        color="white"
      >
        <Text sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }} color="white">
          {discountText}
        </Text>
      </Horizontal>
    </Link>
  );

  return (
    <AppShell
      header={
        <Vertical
          sx={{
            "> a": {
              textDecoration: "none !important",
            },
          }}
          fullW
        >
          {HAS_DISCOUNT ? SaleBanner : null}
          <Vertical fullW spacing={0}>
            <PPP />
            <ResponsiveHeader />
          </Vertical>
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

      {/*<CookieNotice />*/}
    </AppShell>
  );
};

export default Shell;

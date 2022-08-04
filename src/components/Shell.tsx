import { AppShell, AppShellProps } from "@mantine/core";
import { FooterSimple } from "components/Footer";
import { ResponsiveHeader } from "components/Header";
import Wrapper from "components/Wrapper";
import Conditional from "conditional-wrap";
import { footerLinks } from "config/links";
import React from "react";
import { RealReactFC } from "types";
import { ReactGenieAnimations } from "react-genie-with-emotion";

const Shell: RealReactFC<
  AppShellProps & { wrapper?: boolean; padding?: number }
> = ({ children, wrapper = true, padding }) => {
  return (
    <AppShell
      header={<ResponsiveHeader />}
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
        wrap={(children) => <Wrapper>{children}</Wrapper>}
      >
        <>
          <ReactGenieAnimations />
          {/*@ts-ignore*/}
          {children}
        </>
      </Conditional>
    </AppShell>
  );
};

export default Shell;

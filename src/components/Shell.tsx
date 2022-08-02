import { AppShell, AppShellProps } from "@mantine/core";
import { FooterSimple } from "components/Footer";
import { ResponsiveHeader } from "components/Header";
import Wrapper from "components/Wrapper";
import Conditional from "conditional-wrap";
import { footerLinks } from "config/links";
import React from "react";
import { RealReactFC } from "types";

const Shell: RealReactFC<AppShellProps & { wrapper?: boolean }> = ({
  children,
  wrapper = true,
}) => {
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
        {/*@ts-ignore*/}
        {children}
      </Conditional>
    </AppShell>
  );
};

export default Shell;

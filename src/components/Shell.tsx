import { AppShell, AppShellProps } from "@mantine/core";
import { FooterSimple } from "components/Footer";
import { ResponsiveHeader } from "components/Header";
import { footerLinks } from "config/links";
import React from "react";
import Conditional from "conditional-wrap";
import Wrapper from "styles/shared-components/Wrapper";
import { RealReactFC } from "types";

export const defaultAppShellProps = {
  sx: {
    "&:selection": {
      backgroundColor: "red",
    },
  },
  styles: {
    main: {
      paddingTop: 15,
    },
  },
  header: <ResponsiveHeader />,
  footer: <FooterSimple links={footerLinks} />,
};

const Shell: RealReactFC<AppShellProps & { wrapper?: boolean }> = ({
  children,
  wrapper = true,
}) => {
  return (
    <AppShell {...defaultAppShellProps}>
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

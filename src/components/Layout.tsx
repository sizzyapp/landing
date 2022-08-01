import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "styles/chakra-theme";
import { RealReactFC } from "types";

export type LayoutProps = RealReactFC<{ showCookieBanner?: boolean }>;
const Layout: LayoutProps = ({ children, showCookieBanner }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
      <div id="modal" />
    </ChakraProvider>
  );
};

export default Layout;

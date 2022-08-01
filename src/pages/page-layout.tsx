import { ResponsiveHeader } from "components/Header";
import Layout from "components/Layout";
import * as L from "layout-styled-components";
import React from "react";

import * as A from "../styles/shared-components";
import { RealReactFC } from "../types";

export const WrapperLayout: RealReactFC<any> = ({ children }) => {
  return (
    <Layout>
      <L.Vertical py={5} spacing={20}>
        <A.Wrapper>
          <ResponsiveHeader />
          <A.Vertical py={5}>{children}</A.Vertical>
        </A.Wrapper>
      </L.Vertical>
    </Layout>
  );
};

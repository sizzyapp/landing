import { Group } from "@mantine/core";
import { ResponsiveHeader } from "components/Header";
import * as L from "layout-styled-components";
import React from "react";
import Wrapper from "styles/shared-components/Wrapper";
import { RealReactFC } from "../types";

export const WrapperLayout: RealReactFC<any> = ({ children }) => {
  return (
    <L.Vertical py={5} spacing={20}>
      <Wrapper>
        <ResponsiveHeader />
        <Group sx={{ paddingTop: 5, paddingBottom: 5 }}>{children}</Group>
      </Wrapper>
    </L.Vertical>
  );
};

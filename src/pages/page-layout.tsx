import { Group } from "@mantine/core";
import { ResponsiveHeader } from "components/Header";
import React from "react";
import Wrapper from "styles/shared-components/Wrapper";
import { RealReactFC } from "../types";

export const WrapperLayout: RealReactFC<any> = ({ children }) => {
  return (
    <Group sx={{ paddingTop: 5, paddingBottom: 5 }} spacing={20}>
      <Wrapper>
        <ResponsiveHeader />
        <Group sx={{ paddingTop: 5, paddingBottom: 5 }}>{children}</Group>
      </Wrapper>
    </Group>
  );
};

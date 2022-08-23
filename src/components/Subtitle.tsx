import Text from "components/mantine/Text";
import React from "react";
import { RealReactFC } from "types";

export const Subtitle: RealReactFC<{}> = ({ children }) => (
  <Text align="center" color="gray.7" fontSize={[22, 10]}>
    {children}
  </Text>
);

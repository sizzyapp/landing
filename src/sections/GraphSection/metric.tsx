import Text from "components/mantine/Text";
import React from "react";
import CountUp from "react-countup";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";

export const Metric: RealReactFC<{ number: number; title: string }> = ({
  number,
  title,
}) => {
  return (
    <Vertical spacing={10} center>
      <Text weight="bold" fontSize={40} color="gray.8">
        <CountUp suffix="+" separator="," duration={4} start={0} end={number} />
      </Text>
      <Text fontSize={20}>{title}</Text>
    </Vertical>
  );
};

import { Box, Text } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import Wrapper from "components/Wrapper";
import { motion } from "framer-motion";
import { sample, times } from "lodash";
import React, { memo, useMemo } from "react";
import { Vertical } from "styles/layout-components";
import { fontSize } from "styles/mixin";
import { RealReactFC } from "types";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const GraphBox: RealReactFC<{ size: number }> = memo(({ size }) => {
  const colors = ["#ebedf0", "#c6e48b", "#7bc86f", "#196127"];
  let sampleColor = useMemo(() => sample(colors), []);
  return (
    <Box
      variants={item}
      component={motion.div}
      sx={{
        width: size,
        minWidth: size,
        height: size,
        minHeight: size,
        background: sampleColor,
      }}
    />
  );
});

const Graph = () => {
  let boxSize = 30;
  let gap = 5;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <MagicGrid
      sx={{ maxHeight: 170, overflow: "hidden" }}
      component={motion.div}
      animate="show"
      initial="hidden"
      variants={container}
      fallBackToOneColumn={false}
      width={boxSize}
      gap={gap}
    >
      {times(150, (t) => (
        <GraphBox size={boxSize} />
      ))}
    </MagicGrid>
  );
};

const Metric: RealReactFC<{ number: number | string; title: string }> = ({
  number,
  title,
}) => {
  return (
    <Vertical spacing={10} center>
      <Text weight="bold" sx={{ ...fontSize(40) }}>
        {number}
      </Text>
      <Text sx={{ ...fontSize(20) }}>{title}</Text>
    </Vertical>
  );
};

const GraphSection = () => {
  return (
    <Wrapper center padding={true} id="graph-section" maxWidth={900}>
      <Vertical spacing="xl" center sx={{ zIndex: 1 }}>
        <BadassTitle>
          We're working <Highlight>hard</Highlight> to make Sizzy the best tool
          ever
        </BadassTitle>
        <Graph />
        <MagicGrid rowGap={40} width={200}>
          <Metric number="10.000" title="commits" />
          <Metric number={626} title="releases" />
          <Metric number="100+" title="shipped features" />
        </MagicGrid>
      </Vertical>
    </Wrapper>
  );
};

export default GraphSection;

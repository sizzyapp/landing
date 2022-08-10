import { Box } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import { motion } from "framer-motion";
import { sample, times } from "lodash";
import React, { memo, useMemo } from "react";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import Text from "components/mantine/Text";
import CountUp from "react-countup";

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

const Metric: RealReactFC<{ number: number; title: string }> = ({
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

const GraphSection = () => {
  return (
    <Vertical fullW spacing={80} center sx={{ zIndex: 1 }}>
      <BadassTitle maxWidth="auto">
        We're working <Highlight>hard</Highlight> to make Sizzy the best
        developer toolkit ever
      </BadassTitle>
      <Graph />
      <MagicGrid rowGap={40} width={250}>
        <Metric number={9752} title="commits" />
        <Metric number={626} title="releases" />
        <Metric number={100} title="shipped features" />
      </MagicGrid>
    </Vertical>
  );
};

export default GraphSection;

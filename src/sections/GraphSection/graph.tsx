import MagicGrid from "components/MagicGrid";
import { motion } from "framer-motion";
import { times } from "lodash";
import React from "react";
import { GraphBox } from "sections/GraphSection/graphBox";

export const Graph = () => {
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

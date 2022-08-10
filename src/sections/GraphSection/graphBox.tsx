import { Box } from "@mantine/core";
import { motion } from "framer-motion";
import { sample } from "lodash";
import React, { memo, useMemo } from "react";
import { RealReactFC } from "types";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const GraphBox: RealReactFC<{ size: number }> = memo(({ size }) => {
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

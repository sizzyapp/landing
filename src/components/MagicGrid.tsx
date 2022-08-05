import { Box } from "@mantine/core";
import React from "react";
import { autoGrid } from "styled-mixins";
import { RealReactFC } from "types";

const MagicGrid: RealReactFC<{
  width?: number;
  rowGap?: number;
  gap?: number;
}> = ({ children, width = 300, gap = 15, rowGap = gap }) => {
  return (
    <Box
      sx={(t) => ({
        width: "100%",
        ...autoGrid(width, gap),
        rowGap,
        [t.fn.smallerThan(420)]: {
          gridTemplateColumns: "1fr",
        },
      })}
    >
      {children}
    </Box>
  );
};

export default MagicGrid;

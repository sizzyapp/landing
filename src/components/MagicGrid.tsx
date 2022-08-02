import { Box } from "@mantine/core";
import React from "react";
import { autoGrid } from "styled-mixins";
import { RealReactFC } from "types";

const MagicGrid: RealReactFC<{ width?: number; gap?: number }> = ({
  children,
  width = 300,
  gap = 15,
}) => {
  return <Box sx={autoGrid(width, gap)}>{children}</Box>;
};

export default MagicGrid;
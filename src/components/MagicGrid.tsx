import { Box } from "@mantine/core";
import React from "react";
import { autoGrid } from "styled-mixins";
import { RealReactFC } from "types";

const MagicGrid: RealReactFC<{
  width?: number;
  rowGap?: number;
  gap?: number;
  className?: string;
  fallBackToOneColumn?: boolean;
}> = ({
  children,
  fallBackToOneColumn = true,
  className,
  width = 300,
  gap = 15,
  rowGap = gap,
}) => {
  return (
    <Box
      className={className}
      sx={(t) => ({
        width: "100%",
        ...autoGrid(width, gap),
        rowGap,
        ...(fallBackToOneColumn && {
          [t.fn.smallerThan(420)]: {
            gridTemplateColumns: "1fr",
          },
        }),
      })}
    >
      {children}
    </Box>
  );
};

export default MagicGrid;

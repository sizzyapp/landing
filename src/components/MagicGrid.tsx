import {
  Box,
  BoxProps,
  createPolymorphicComponent,
  CSSObject,
} from "@mantine/core";
import React from "react";
import { autoGrid } from "styled-mixins";
import { RealReactFC } from "types";

type GridProps = {
  width?: number;
  rowGap?: number;
  gap?: number;
  className?: string;
  fallBackToOneColumn?: boolean;
  sx?: CSSObject;
} & Partial<BoxProps>;

const MagicGrid: RealReactFC<GridProps> = (props) => {
  const {
    children,
    fallBackToOneColumn = true,
    className,
    width = 300,
    gap = 15,
    rowGap = gap,
    sx,
    ...rest
  } = props;

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
        ...sx,
      })}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default createPolymorphicComponent<"button", GridProps>(MagicGrid);

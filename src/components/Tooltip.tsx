import React from "react";
import { RealReactFC } from "types";
import { Tooltip, TooltipProps } from "@mantine/core";

const TooltipComponent: RealReactFC<Partial<TooltipProps>> = ({
  children,
  ...props
}) => {
  return (
    <Tooltip
      label={children}
      width={300}
      multiline
      sx={(t) => ({
        background: "white",
        border: `1px solid ${t.colors.gray[2]}`,
        boxShadow: t.shadows.lg,
        color: t.colors.gray[8],
      })}
      transition="pop"
      withArrow
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipComponent;

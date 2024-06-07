import React from "react";
import { RealReactFC } from "types";
import { Tooltip, TooltipProps } from "@mantine/core";

const TooltipComponent: RealReactFC<Partial<TooltipProps>> = ({ children, opened, ...props }) => {
  return (
    <Tooltip
      {...(opened !== undefined && opened !== null && { opened })}
      label={children}
      width={300}
      multiline
      sx={(t) => ({
        background: "white",
        border: `1px solid ${t.colors.gray[2]}`,
        boxShadow: t.shadows.lg,
        color: t.colors.gray[8],
      })}
      withArrow
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipComponent;

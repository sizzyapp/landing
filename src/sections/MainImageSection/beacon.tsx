import { Box, useMantineTheme } from "@mantine/core";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import Tooltip from "components/Tooltip";
import { motion } from "framer-motion";
import React from "react";
import { RealReactFC } from "types";
import { useBoolean } from "react-hanger";

let percentify = (a: number | string) => (typeof a === "string" ? a : `${a}%`);

export const Beacon: RealReactFC<{
  x: number | string;
  y: number | string;
}> = ({ children, x, y }) => {
  let size = 10;
  const { colors } = useMantineTheme();
  const opened = useBoolean(false);
  const isTouchDevice = require("is-touch-device")();
  const canHover = !isTouchDevice;

  return (
    <Tooltip
      {...(!canHover && {
        opened: opened.value,
      })}
      label={<MarkdownContent>{children}</MarkdownContent>}
    >
      <Box
        onClick={() => {
          if (!canHover) {
            opened.toggle();
          }
        }}
        component={motion.div}
        animate={{
          scale: [1, 1, 1],
          backgroundColor: [colors.purple[2], colors.purple[1], colors.purple[2]],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        sx={(t) => ({
          cursor: "pointer",
          opacity: 0.8,
          boxShadow: ["rgb(124 50 181 / 34%) 0px 0px 6px 3px"],
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: colors.purple[4],
          position: "absolute",
          zIndex: 9,
          top: percentify(y),
          left: percentify(x),
          width: size,
          height: size,
          borderRadius: "100%",
          [t.fn.smallerThan("xs")]: {
            display: "none",
          },
        })}
      />
    </Tooltip>
  );
};

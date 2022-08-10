import { Box, useMantineTheme } from "@mantine/core";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import Tooltip from "components/Tooltip";
import { allFeatures, Feature } from "contentlayer/generated";
import { motion } from "framer-motion";
import React from "react";
import { RealReactFC } from "types";

let img =
  "https://res.cloudinary.com/kitze/image/upload/v1660135569/Sizzy%20Landing/Images/CleanShot_2022-08-10_at_14.45.56_2x.png";

let percentify = (a: number | string) => (typeof a === "string" ? a : `${a}%`);

const Beacon: RealReactFC<{ x: number | string; y: number | string }> = ({
  children,
  x,
  y,
}) => {
  let size = 10;
  const { colors } = useMantineTheme();

  return (
    <Tooltip label={<MarkdownContent>{children}</MarkdownContent>}>
      <Box
        component={motion.div}
        animate={{
          scale: [0, 1.3, 1],
          backgroundColor: [
            colors.purple[2],
            colors.purple[1],
            colors.purple[2],
          ],
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
const findFeatureBySlug = (slug: string): Feature =>
  allFeatures.find((f) => f.slug === slug);

const Beacons = () => {
  let firstRowY = 1.3;
  let secondRowY = firstRowY + 4;
  return (
    <>
      <Beacon x="13%" y={firstRowY}>
        {findFeatureBySlug("projects").description}
      </Beacon>
      <Beacon x="19%" y={firstRowY}>
        One click to open the current project in your code editor or file
        explorer
      </Beacon>
      <Beacon x="75%" y={firstRowY}>
        All the useful plugins you might need as a developer: Kill a port, Grid
        overlay, Debug CSS, Page Navigator, etc.
      </Beacon>
      <Beacon x="88%" y={firstRowY}>
        {findFeatureBySlug("photo-studio")?.description}
      </Beacon>
      <Beacon x="12%" y={secondRowY}>
        {findFeatureBySlug("session-manager")?.description}
      </Beacon>
    </>
  );
};
const MainImageSection = () => {
  return (
    <Box sx={{ position: "relative" }} className="sizzy-teal-1">
      <Box
        component="img"
        sx={(t) => ({
          overflow: "hidden",
          width: "100%",
          borderRadius: t.radius.md,
          border: `1px solid ${t.colors.gray[3]}`,
          boxShadow: "0 0 12px 5px rgb(0 0 0 / 10%)",
        })}
        src={img}
      />
      <Beacons />
    </Box>
  );
};

export default MainImageSection;

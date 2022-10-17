import React from "react";
import { Box } from "@mantine/core";
import { Beacons } from "sections/MainImageSection/beacons";

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
        src="/images/main.png"
      />
      <Beacons />
    </Box>
  );
};

export default MainImageSection;

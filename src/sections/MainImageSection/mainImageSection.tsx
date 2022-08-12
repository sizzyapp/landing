import { Box } from "@mantine/core";
import { cloudinaryRoot } from "config/cloudinary";
import React from "react";
import { Beacons } from "sections/MainImageSection/beacons";

let img = `${cloudinaryRoot}/v1660135569/Sizzy%20Landing/Images/CleanShot_2022-08-10_at_14.45.56_2x.png`;

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

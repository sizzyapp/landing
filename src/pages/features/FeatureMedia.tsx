import { Box } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

const FeatureMedia = ({ image, video }) => {
  const { classes } = useStyles();

  const commonStyles = (t) => ({
    width: "100%",
    borderRadius: t.radius.md,
  });
  return (
    <>
      {image && (
        <Box
          component="img"
          className={classes.image}
          src={image}
          sx={commonStyles}
        />
      )}
      {video && (
        <Box
          sx={commonStyles}
          component="video"
          controls={true}
          muted={true}
          src={video.replace(".mov", ".mp4")}
        />
      )}
    </>
  );
};

export default FeatureMedia;

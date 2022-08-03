import { Box } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

const FeatureMedia = ({ image, video }) => {
  const { classes } = useStyles();

  return (
    <>
      {image && <img className={classes.image} width="100%" src={image} />}
      {video && (
        <Box
          sx={{ borderRadius: 15, width: "100%", flex: 1 }}
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

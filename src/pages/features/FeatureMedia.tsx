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
          sx={(t) => ({ borderRadius: t.radius.md, width: "100%", flex: 1 })}
          component="video"
          controls={true}
          muted={true}
          src={video}
        />
      )}
    </>
  );
};

export default FeatureMedia;

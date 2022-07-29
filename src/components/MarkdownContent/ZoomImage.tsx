import React from "react";
import { Image } from "@mantine/core";
import Zoom from "react-medium-image-zoom";

const ZoomImage = (props) => {
  return (
    <Zoom>
      <Image {...props} />
    </Zoom>
  );
};

export default ZoomImage;

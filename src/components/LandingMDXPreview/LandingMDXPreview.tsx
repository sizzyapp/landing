import React from "react";
import Twemoji from "react-twemoji";
import { RealReactFC } from "types";
import { useStyles } from "../../libs/mdx-mantine/styles";
import { Stack } from "@mantine/core";
import { MDXPreview } from "../../libs/mdx-preview/MDXPReview";
import { RenderFallbackContent } from "../../libs/mdx-mantine/RenderFallbackContent";
import { mantineMDXcomponents } from "../../libs/mdx-mantine/mantineMDXcomponents";
import { mantineMDXrenderers } from "../../libs/mdx-mantine/mantineMDXrenderers";

const LandingMDXPreview: RealReactFC<{ clamp?: boolean }> = ({
  children,
  clamp,
}) => {
  if (!children) return null;
  const { classes } = useStyles({ clamp });
  return (
    <Stack sx={{ flex: 1, position: "relative" }}>
      <Twemoji>
        <MDXPreview
          disableParsingRawHTML={false}
          overrides={{
            ...mantineMDXcomponents,
            ...mantineMDXrenderers,
          }}
          markdown={children as string}
          errorFallbackContent={RenderFallbackContent}
        />
      </Twemoji>
      {clamp && <div className={classes.overflow} />}
    </Stack>
  );
};

export default LandingMDXPreview;

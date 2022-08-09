import { CSSObject, Title } from "@mantine/core";
import React from "react";
import { RealReactFC } from "types";
import { useStyles } from "./styles";

export const Highlight = ({ children }) => {
  const { classes } = useStyles({});
  return <span className={`${classes.highlight}`}>{children}</span>;
};

const BadassTitle: RealReactFC<{
  sx?: CSSObject;
  maxWidth?: number | string;
}> = ({ children, sx, maxWidth }) => {
  const { classes } = useStyles({ maxWidth });
  return (
    <Title sx={sx} align="center" id="sizzy-text" className={classes.title}>
      {children}
    </Title>
  );
};

export default BadassTitle;

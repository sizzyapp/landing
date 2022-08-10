import React from "react";
import { Text, TextProps } from "@mantine/core";
import { fontSize as fontSizeMixin } from "styles/mixin";
import { RealReactFC } from "types";

const TextComponent: RealReactFC<
  TextProps & { fontSize?: [a: number, b?: number] | number }
> = ({ fontSize, ...rest }) => {
  if (fontSize === undefined) return <Text {...rest} />;
  let isNumber = typeof fontSize === "number";
  const f = isNumber ? fontSize : fontSize[0];
  const l = isNumber ? 0 : fontSize[1];
  return <Text sx={{ ...fontSizeMixin(f, l) }} {...rest}></Text>;
};

export default TextComponent;

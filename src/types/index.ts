import React from "react";

export type RealReactFC<T> = React.FC<{ children?: React.ReactNode } & T>;

export type LinkType = {
  link: string;
  label: string;
  isExternal?: boolean;
  counter?: number;
};

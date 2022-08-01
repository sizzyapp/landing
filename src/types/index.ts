import React from "react";

export type RealReactFC<T> = React.FC<{ children?: React.ReactNode } & T>;

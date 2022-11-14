import React from "react";
import { RawMDXPreview } from "./RawMDXPreview";
import { MDXPreviewProps } from "./types";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type T = MDXPreviewProps & {
  errorFallbackContent: React.ComponentType<FallbackProps>;
};

export const MDXPreview: React.FC<T> = ({ errorFallbackContent, ...rest }) => {
  return (
    <ErrorBoundary FallbackComponent={null}>
      <RawMDXPreview {...rest} />
    </ErrorBoundary>
  );
};

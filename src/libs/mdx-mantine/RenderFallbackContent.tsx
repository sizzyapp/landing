// TODO: Extract to a shared 'error rendering'
import React from "react";
import { useBoolean } from "react-hanger";
import { Button, Code, Title } from "@mantine/core";
import { Horizontal, Vertical } from "../../styles/layout-components";
import { isDev } from "../../utils/utils";
import { FallbackProps } from "react-error-boundary";

export const RenderFallbackContent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const showError = useBoolean(false);

  const canSeeError = isDev;

  return (
    <Vertical fullW spacing={12}>
      <Title order={2} color="red.300">
        Cannot render preview
      </Title>

      <Horizontal spacing={12}>
        <Button sx={{ width: "fit-content" }} onClick={resetErrorBoundary}>
          Reload
        </Button>
        {canSeeError && !showError.value && (
          <Button onClick={showError.setTrue}>Show error</Button>
        )}
      </Horizontal>

      {canSeeError && showError.value && (
        <Code sx={{ whiteSpace: "pre" }}>{error.stack}</Code>
      )}
    </Vertical>
  );
};

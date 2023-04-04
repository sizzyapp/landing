import React, { lazy, Suspense } from "react";
import { Box, Text } from "@mantine/core";

const Twemoji = lazy(() => import("react-twemoji"));

export const Flag = ({ flag }) => {
  const size = 25;
  return (
    <Suspense fallback={<Text sx={{ fontSize: 30 }}>{flag}</Text>}>
      <Box
        sx={{
          img: {
            width: size,
            height: size,
          },
        }}
      >
        <Twemoji>{flag}</Twemoji>
      </Box>
    </Suspense>
  );
};

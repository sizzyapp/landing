import { Box, Group, Text } from "@mantine/core";
import NextLink from "next/link";
import React from "react";

export const UseCaseCard = ({ post }) => {
  return (
    <NextLink href={`/use-cases/${post.slug}`}>
      <Box
        sx={(theme) => ({
          borderRadius: 4,
          cursor: "pointer",
          boxShadow: theme.shadows.sm,
          transition: "all 100ms linear",
          background: "rgba(0,0,0,0.05)",
          padding: 3,
        })}
      >
        <Group spacing={5}>
          <Text sx={{ fontWeight: "bold", fontSize: 18 }}>{post.title}</Text>
          <Text sx={(theme) => ({ fontSize: 15, color: theme.colors.grey[6] })}>
            {post.description}
          </Text>
        </Group>
      </Box>
    </NextLink>
  );
};

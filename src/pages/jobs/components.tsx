import NextLink from "next/link";
import React from "react";
import { Card, Stack, Text, Badge, Title } from "@mantine/core";

export const JobCard = ({ post }) => {
  return (
    <NextLink href={`/jobs/${post.slug}`}>
      <Card
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[0],
          cursor: "pointer",
          borderRadius: theme.radius.md,
          boxShadow: theme.shadows.sm,
          transition: "all 100ms linear",
          ":hover": {
            backgroundColor: theme.colors.gray[1],
            boxShadow: theme.shadows.lg,
          },
        })}
      >
        <Stack spacing="xs" align="start">
          <Title order={4}>{post.title}</Title>
          <Badge>{post.jobtype}</Badge>
          <Text color="dimmed">{post.description}</Text>
        </Stack>
      </Card>
    </NextLink>
  );
};

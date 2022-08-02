import { Badge, Card, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { RealReactFC } from "types";

const CardComponent: RealReactFC<{
  title: string;
  badge?: string;
  description: string;
}> = ({ title, badge, description }) => {
  return (
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
        <Title order={4}>{title}</Title>
        {badge && <Badge>{badge}</Badge>}
        <Text sx={(t) => ({ color: t.colors.gray[8] })}>{description}</Text>
      </Stack>
    </Card>
  );
};

export default CardComponent;

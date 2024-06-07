import { Badge, Card, Stack, Text, Title, CardProps } from "@mantine/core";
import React from "react";
import { ReactFC } from "types";

const CardComponent: ReactFC<
  Partial<CardProps> & {
    title: string;
    badge?: string;
    description: string;
  }
> = ({ title, badge, description, ...rest }) => {
  return (
    <Card
      component="a"
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
      {...rest}
    >
      <Stack spacing="xs" align="start">
        <Title order={4}>{title}</Title>
        {badge && <Badge>{badge}</Badge>}
        <Text color="gray.8">{description}</Text>
      </Stack>
    </Card>
  );
};

export default CardComponent;

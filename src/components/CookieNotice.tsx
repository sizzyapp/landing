import React, { useState } from "react";
import { Text, Button, CloseButton, Group, Paper, Box } from "@mantine/core";
import { useCookies } from "hooks/useCookies";

const CookieNotice: React.FC = () => {
  const [ignore, setIgnore] = useState(false);

  const hasNoSearch = typeof window !== "undefined" && window.location.search === "";
  const cookies = useCookies();
  if (hasNoSearch || cookies.canUse || ignore) {
    return null;
  }

  const onClose = () => setIgnore(true);
  const onConfirm = () => {
    cookies.accept();
    onClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
        maxWidth: "900px",
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      p="xs"
    >
      <Paper withBorder p="md" radius="md" shadow="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text size="md" weight={500}>
            Hey, we brought cookies! yummy-looking cookie icon 🍪
          </Text>
          <CloseButton mr={-9} mt={-9} onClick={onClose} />
        </Box>
        <Group position="apart" mt="xs">
          <Text color="dimmed" size="xs">
            We want to make sure your experience with Sizzy is “sweet”. We also care about your{" "}
            <Text variant="link" component="a" color="purple" href="/privacy">
              privacy
            </Text>
            .
          </Text>
          <Group>
            <Button variant="default" size="xs" onClick={onClose}>
              Ignore
            </Button>
            <Button variant="outline" size="xs" onClick={onConfirm}>
              Accept all
            </Button>
          </Group>
        </Group>
      </Paper>
    </Box>
  );
};

export default CookieNotice;

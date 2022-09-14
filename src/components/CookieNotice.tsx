import React, { useState } from "react";
import { Text, Button, CloseButton, Group, Paper, Box } from "@mantine/core";
import { parseCookies, setCookie } from "nookies";

export const COOKIES_ACCEPTED_KEY = "sizzy-cookies-accepted";

const CookieNotice: React.FC = () => {
  const cookies = parseCookies();
  const [ignore, setIgnore] = useState(false);

  const hasNoSearch = typeof window !== "undefined" && window.location.search === "";
  const acceptedCookies = cookies[COOKIES_ACCEPTED_KEY] === "true";
  if (hasNoSearch || acceptedCookies || ignore) {
    return null;
  }

  const onClose = () => setIgnore(true);
  const onConfirm = () => {
    setCookie(null, COOKIES_ACCEPTED_KEY, "true", {
      domain: process.env.NODE_ENV === "development" ? "localhost" : `.${window.location.hostname}`,
      maxAge: 12 * 30 * 24 * 60 * 60,
      path: "/",
    });

    onClose();
  };

  return (
    <Box sx={{ position: "fixed", bottom: 0, zIndex: 1000, width: "100%" }} p="lg">
      <Paper withBorder p="lg" radius="md" shadow="md">
        <Group position="apart" mb="xs">
          <Text size="md" weight={500}>
            Allow cookies
          </Text>
          <CloseButton mr={-9} mt={-9} onClick={onClose} />
        </Group>
        <Text color="dimmed" size="xs">
          So the deal is, we want to spy on you. We would like to know what did you have for todays
          breakfast, where do you live, how much do you earn and like 50 other things. To view our
          landing page you will have to accept all cookies. That&apos;s all, and remember that we
          are watching...
        </Text>
        <Group position="right" mt="xs">
          <Button variant="default" size="xs" onClick={onClose}>
            Ignore
          </Button>
          <Button variant="outline" size="xs" onClick={onConfirm}>
            Accept all
          </Button>
        </Group>
      </Paper>
    </Box>
  );
};

export default CookieNotice;

import { Badge, Stack, Title } from "@mantine/core";
import Shell from "components/Shell";
import React from "react";
import { FeaturesTable } from "./Table";

const VsOtherBrowserPage = () => {
  return (
    <Shell>
      <Stack sx={{ alignItems: "start" }} spacing={5}>
        <Title order={3}>Sizzy vs other browsers</Title>
        <Badge>(100% fair comparison)</Badge>
        <FeaturesTable />
      </Stack>
    </Shell>
  );
};

export default VsOtherBrowserPage;

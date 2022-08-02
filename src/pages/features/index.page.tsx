import { Box, Grid, SimpleGrid, Stack } from "@mantine/core";
import Wrapper from "components/Wrapper";
import Feature from "pages/features/Feature";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import { allFeatures } from "contentlayer/generated";
import React from "react";
import { autoGrid } from "styled-mixins";

const FeaturesPage: React.FC = () => {
  let filteredFeatures = allFeatures.filter((f) => f.layout !== "grid");
  return (
    <Shell wrapper={false}>
      <MetaTags
        url={`https://sizzy.co/jobs`}
        title="Sizzy Features"
        description="Sizzy Features"
      />
      <Stack spacing="xl">
        <Stack spacing="lg">
          {filteredFeatures.map((feature) => (
            <Feature feature={feature} />
          ))}
        </Stack>
        <Wrapper id="final-features" padding={false} maxWidth={1500}>
          <Box
            className="sizzy-red-1"
            sx={{
              ...autoGrid(300, 25),
              margin: "auto",
            }}
          >
            <Feature slug="snippets" />
            <Feature slug="notes" />
            <Feature slug="tasks" />
          </Box>
        </Wrapper>
      </Stack>
    </Shell>
  );
};

export default FeaturesPage;

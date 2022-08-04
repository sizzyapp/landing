import { Box, Stack } from "@mantine/core";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import { allFeatures } from "contentlayer/generated";
import Feature from "pages/features/Feature";
import React from "react";
import { autoGrid } from "styled-mixins";

const FeaturesPage: React.FC = () => {
  let filteredFeatures = allFeatures.filter((f) => f.layout !== "grid");
  let gridFeatures = allFeatures.filter((f) => f.layout === "grid");
  return (
    <Shell wrapper={false}>
      <MetaTags
        url={`https://sizzy.co/jobs`}
        title="Sizzy Features"
        description="Sizzy Features"
      />

      <Stack spacing="xl">
        <Stack spacing="xl">
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
            {gridFeatures.map((feature) => (
              <Feature feature={feature} />
            ))}
          </Box>
        </Wrapper>
      </Stack>
    </Shell>
  );
};

export default FeaturesPage;

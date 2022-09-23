import { Box, Stack } from "@mantine/core";
import MagicGrid from "components/MagicGrid";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import { allFeatures } from "contentlayer/generated";
import Feature from "pages/features/Feature";
import React from "react";
import { autoGrid } from "styled-mixins";
import { Vertical } from "styles/layout-components";
import { getMetaImage } from "utils/get-meta-image";

const FeaturesPage: React.FC = () => {
  let filteredFeatures = allFeatures.filter((f) => f.layout !== "grid");
  let gridFeatures = allFeatures.filter((f) => f.layout === "grid");
  return (
    <Shell wrapper={false}>
      <MetaTags
        url={`https://sizzy.co/features`}
        title="Sizzy Features"
        description="Sizzy Features"
        image={getMetaImage({ title: "Sizzy features" })}
      />

      <Wrapper maxWidth={1600}>
        <Vertical className="sizzy-teal-2" spacing="xl">
          <MagicGrid gap={30} width={500}>
            {filteredFeatures.map((feature) => (
              <Feature feature={feature} />
            ))}
          </MagicGrid>
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
        </Vertical>
      </Wrapper>
    </Shell>
  );
};

export default FeaturesPage;

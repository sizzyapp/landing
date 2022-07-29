import { Box } from "@chakra-ui/react";
import Feature from "components/Feature";
import MetaTags from "components/MetaTags";
import { allFeatures } from "contentlayer/generated";
import { WrapperLayout } from "pages/page-layout";
import React from "react";
import { autoGrid } from "styled-mixins";

const FeaturesPage: React.FC = () => {
  return (
    <WrapperLayout>
      <MetaTags
        url={`https://sizzy.co/jobs`}
        title="Sizzy Features"
        description="Sizzy Features"
      />
      <Box {...autoGrid(300, 10)}>
        {allFeatures.map((feature) => (
          <Feature {...feature} />
        ))}
      </Box>
    </WrapperLayout>
  );
};

export default FeaturesPage;

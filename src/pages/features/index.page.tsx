import { Stack } from "@mantine/core";
import Feature from "components/Feature";
import MetaTags from "components/MetaTags";
import { allFeatures } from "contentlayer/generated";
import { WrapperLayout } from "pages/page-layout";
import React from "react";

const FeaturesPage: React.FC = () => {
  return (
    <WrapperLayout>
      <MetaTags
        url={`https://sizzy.co/jobs`}
        title="Sizzy Features"
        description="Sizzy Features"
      />
      <Stack spacing={5}>
        {allFeatures.map((feature) => (
          <Feature {...feature} />
        ))}
      </Stack>
    </WrapperLayout>
  );
};

export default FeaturesPage;

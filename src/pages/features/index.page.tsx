import { Stack } from "@mantine/core";
import Feature from "components/Feature";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import { allFeatures } from "contentlayer/generated";
import React from "react";

const FeaturesPage: React.FC = () => {
  return (
    <Shell>
      <MetaTags
        url={`https://sizzy.co/jobs`}
        title="Sizzy Features"
        description="Sizzy Features"
      />
      <Stack spacing={100}>
        {allFeatures.map((feature) => (
          <Feature {...feature} />
        ))}
      </Stack>
    </Shell>
  );
};

export default FeaturesPage;

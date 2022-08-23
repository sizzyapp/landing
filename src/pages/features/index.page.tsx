import { useListState } from "@mantine/hooks";
import Text from "components/mantine/Text";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import { useInSizzy } from "config/sizzy";
import { allFeatures } from "contentlayer/generated";
import { FeatureNavigator } from "pages/features/FeatureNavigator";
import FeaturesList from "pages/features/FeaturesList";
import React from "react";

export const FeaturesContext = React.createContext<any>({});

const FeaturesPage: React.FC = () => {
  const isInSizzy = useInSizzy();

  const [shownFeatures, handlers] = useListState([]);

  let register = (slug: string) => {
    if (shownFeatures.filter((f) => f !== slug)) {
      handlers.append(slug);
    }
  };

  return (
    <FeaturesContext.Provider value={{ register }}>
      <Shell headerProps={{ shadow: false, blurry: false }} wrapper={false}>
        <FeatureNavigator />

        <MetaTags
          url={`https://sizzy.co/jobs`}
          title="Sizzy Features"
          description="Sizzy Features"
        />

        {isInSizzy && (
          <Text fontSize={20}>
            {shownFeatures.length} / {allFeatures.length}
          </Text>
        )}

        <Wrapper maxWidth={1600}>
          <FeaturesList />
        </Wrapper>
      </Shell>
    </FeaturesContext.Provider>
  );
};

export default FeaturesPage;

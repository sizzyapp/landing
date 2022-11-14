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
import { Popover, Button } from "@mantine/core";
import { Vertical } from "../../styles/layout-components";

export const FeaturesContext = React.createContext<any>({});

const FeaturesPage: React.FC = () => {
  const isInSizzy = useInSizzy();

  const [shownFeatures, { append: addShownFeature }] = useListState<string>([]);

  let register = (slug: string) => {
    let alreadyExists = !!shownFeatures.find((f) => f === slug);
    if (!alreadyExists) {
      addShownFeature(slug);
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
          <Vertical spacing={10}>
            <Text>
              {shownFeatures.length} / {allFeatures.length} features
            </Text>
            <ul>
              {allFeatures.map((f, i) => {
                let isShown = !!shownFeatures.find((slug) => slug === f.slug);
                return (
                  !isShown && (
                    <li>
                      {i}.{f.slug}
                    </li>
                  )
                );
              })}
            </ul>
          </Vertical>
        )}

        <Wrapper maxWidth={1600}>
          <FeaturesList />
        </Wrapper>
      </Shell>
    </FeaturesContext.Provider>
  );
};

export default FeaturesPage;

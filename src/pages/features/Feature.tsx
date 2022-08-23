import { Box, Text, Title } from "@mantine/core";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";

import { allFeatures, Feature as FeatureType } from "contentlayer/generated";
import FeatureMedia from "pages/features/FeatureMedia";
import { FeaturesContext } from "pages/features/index.page";
import { useContext, useEffect } from "react";
import { Vertical } from "styles/layout-components";

export enum FeatureLayout {
  Horizontal,
  Vertical,
}

const Feature: React.FC<{
  feature?: FeatureType;
  findBySlug?: string;
  wrapper?: boolean;
  inverse?: boolean;
  layout: FeatureLayout;
}> = ({ feature, findBySlug, layout, inverse, wrapper = true }) => {
  const foundFeature =
    feature || allFeatures.find((f) => f.slug === findBySlug);

  const { register } = useContext(FeaturesContext);

  useEffect(() => {
    if (foundFeature) {
      register?.(foundFeature.slug);
    }
  }, []);

  if (!foundFeature) return null;

  const { title, description, image, video } = foundFeature;
  let titleAndDescription = (
    <Vertical spacing="xs">
      <Title
        order={1}
        sx={(theme) => ({
          color: theme.colors.gray[9],
        })}
      >
        {title}
      </Title>
      <Text color="gray.8" size="xl">
        <MarkdownContent>{description}</MarkdownContent>
      </Text>
    </Vertical>
  );

  let columnGap = 30;
  let featureMedia = <FeatureMedia image={image} video={video} />;

  if (layout === FeatureLayout.Vertical) {
    return (
      <Vertical>
        {titleAndDescription}
        {featureMedia}
      </Vertical>
    );
  }

  let smallSide = `30%`;
  let bigSide = `calc(70% - ${columnGap}px)`;
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: inverse
          ? `${bigSide} ${smallSide}`
          : `${smallSide} ${bigSide}`,
        alignItems: "center",
        columnGap: columnGap,
      }}
      className="sizzy-purple-3"
    >
      {inverse
        ? [featureMedia, titleAndDescription]
        : [titleAndDescription, featureMedia]}
    </Box>
  );
};

export default Feature;

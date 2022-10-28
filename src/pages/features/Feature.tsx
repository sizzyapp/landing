import { Text, Title } from "@mantine/core";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";

import { allFeatures, Feature as FeatureType } from "contentlayer/generated";
import FeatureMedia from "pages/features/FeatureMedia";
import { ErrorBoundary } from "react-error-boundary";
import { Vertical } from "styles/layout-components";

const Feature: React.FC<{
  feature?: FeatureType;
  findBySlug?: string;
  wrapper?: boolean;
}> = ({ feature, findBySlug, wrapper = true }) => {
  const foundFeature = feature || allFeatures.find((f) => f.slug === findBySlug);
  if (!foundFeature) return null;
  const { title, description, image, video } = foundFeature;
  return (
    <Vertical
      fullW
      className="sizzy-purple-3"
      sx={(t) => ({
        flex: 1,
        width: "100%",
      })}
      spacing="lg"
    >
      <Vertical fullW spacing="sm">
        <Vertical fullW sx={{ flex: 1, width: "100" }} spacing="xs">
          <Title
            order={2}
            sx={(theme) => ({
              color: theme.colors.purple[4],
            })}
          >
            {title}
          </Title>
          <Text size="md" sx={(t) => ({ color: t.colors.gray[8] })}>
            <ErrorBoundary fallback={<div>"error :("</div>}>
              <MarkdownContent>{description}</MarkdownContent>
            </ErrorBoundary>
          </Text>
        </Vertical>
      </Vertical>

      <FeatureMedia image={image} video={video} />
    </Vertical>
  );
};

export default Feature;

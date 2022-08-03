import {
  Box,
  Button,
  createStyles,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import Wrapper from "components/Wrapper";
import Conditional from "conditional-wrap";

import { allFeatures, Feature as FeatureType } from "contentlayer/generated";
import NextLink from "next/link";
import FeatureMedia from "pages/features/FeatureMedia";

const Feature: React.FC<{
  feature?: FeatureType;
  actionText?: string;
  findBySlug?: string;
  wrapper?: boolean;
}> = ({ feature, findBySlug, actionText, wrapper = true }) => {
  const foundFeature =
    feature || allFeatures.find((f) => f.slug === findBySlug);
  if (!foundFeature) return null;
  const { title, slug, description, image, video } = foundFeature;
  return (
    <Conditional
      condition={wrapper}
      wrap={(c) => <Wrapper padding={false}>{c}</Wrapper>}
    >
      <Stack spacing="xl">
        <Stack align="start" spacing="sm">
          <Stack spacing="xs">
            <Title
              sx={(theme) => ({
                color: theme.colors.purple[4],
              })}
            >
              {title}
            </Title>
            <Text
              sx={(theme) => ({
                fontSize: theme.fontSizes.lg,
                color: theme.colors.gray[8],
              })}
            >
              <MarkdownContent>{description}</MarkdownContent>
            </Text>
          </Stack>
          <NextLink href={`/features/${slug}`} passHref>
            <Button variant="light" component="a">
              Learn more
            </Button>
          </NextLink>
        </Stack>

        <FeatureMedia image={image} video={video} />

        {actionText && (
          <DownloadButton size="lg" label={actionText} variant="light" />
        )}
      </Stack>
    </Conditional>
  );
};

export default Feature;

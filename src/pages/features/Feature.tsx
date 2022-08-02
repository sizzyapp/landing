import { Box, createStyles, Group, Stack, Text, Title } from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import Wrapper from "components/Wrapper";
import Conditional from "conditional-wrap";

import { allFeatures, Feature as FeatureType } from "contentlayer/generated";

const useStyles = createStyles((theme) => ({
  image: {
    objectFit: "cover",
    objectPosition: "left",
    flex: 3,
    borderRadius: theme.radius.md,
    overflow: "hidden",
    boxShadow: theme.shadows.lg,
  },
}));

const Feature: React.FC<{
  feature?: FeatureType;
  actionText?: string;
  slug?: string;
  wrapper?: boolean;
}> = ({ feature, slug, actionText, wrapper = true }) => {
  const foundFeature = feature || allFeatures.find((f) => f.slug === slug);
  if (!foundFeature) return null;
  const { classes } = useStyles();
  const { title, description, image, video } = foundFeature;
  return (
    <Conditional
      condition={wrapper}
      wrap={(c) => <Wrapper padding={false}>{c}</Wrapper>}
    >
      <Stack spacing={5}>
        <Stack spacing="sm">
          <Title
            color="purple"
            sx={(theme) => ({
              color: theme.colors.purple[4],
            })}
          >
            {title}
          </Title>
          <Text
            sx={(theme) => ({
              fontSize: theme.fontSizes.lg,
              opacity: 0.8,
            })}
          >
            <MarkdownContent>{description}</MarkdownContent>
          </Text>
        </Stack>

        {image && <img className={classes.image} width="100%" src={image} />}
        {video && (
          <Box
            sx={{ borderRadius: 15, width: "100%", flex: 1 }}
            component="video"
            controls={true}
            muted={true}
            src={video.replace(".mov", ".mp4")}
          />
        )}
        {actionText && (
          <DownloadButton size="lg" label={actionText} variant="light" />
        )}
      </Stack>
    </Conditional>
  );
};

export default Feature;

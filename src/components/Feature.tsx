import {
  Box,
  Center,
  Container,
  createStyles,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";

import { Feature as FeatureType } from "contentlayer/generated";

const Feature: React.FC<
  FeatureType & {
    actionText?: string;
  }
> = ({ title, description, video, image, actionText }) => {
  return (
    <Stack>
      <Container>
        <Stack spacing="xl">
          <Stack>
            <Title
              color="purple"
              sx={(theme) => ({
                color: theme.colors.purple[4],
              })}
            >
              {title}
            </Title>
            <Text
              sx={(theme) => ({ fontSize: theme.fontSizes.lg, opacity: 0.8 })}
            >
              <MarkdownContent>{description}</MarkdownContent>
            </Text>
          </Stack>
        </Stack>
      </Container>

      {image && (
        <Image
          width="100%"
          src={image}
          sx={(theme) => ({
            flex: 3,
            borderRadius: theme.radius.md,
            overflow: "hidden",
            boxShadow: theme.shadows.lg,
          })}
        />
      )}
      {video && (
        <Box
          sx={{ borderRadius: 8 }}
          component="video"
          controls={true}
          src={video.replace(".mov", ".mp4")}
        />
      )}
      {actionText && (
        <DownloadButton size="lg" label={actionText} variant="light" />
      )}
    </Stack>
  );
};

export default Feature;

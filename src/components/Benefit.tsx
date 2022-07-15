import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Benefit: React.FC<{
  title: string;
  description: string;
  quote: {
    content: string;
    author: string;
  };
  image: string;
}> = ({ title, description, image, quote }) => {
  return (
    <Center
      sx={{
        height: "95vh",
      }}
    >
      <Stack
        sx={(theme) => ({
          paddingTop: theme.spacing.xl * 4,
          paddingBottom: theme.spacing.xl * 4,
        })}
        spacing="xl"
      >
        <Stack sx={{ flex: 2 }} spacing="xl">
          <Stack>
            <Title
              sx={(theme) => ({
                color: theme.colors.purple[4],
              })}
            >
              {title}
            </Title>
            <Text
              sx={(theme) => ({ fontSize: theme.fontSizes.lg, opacity: 0.8 })}
            >
              {description}
            </Text>
          </Stack>
          <Stack sx={{ position: "relative" }}>
            <Box
              sx={(theme) => ({
                color: theme.colors.purple[7],
                position: "absolute",
                top: -20,
                left: 0,
                zIndex: -1,
              })}
            >
              <RiDoubleQuotesL size={90} />
            </Box>
            <Box
              sx={(theme) => ({
                color: theme.colors.purple[7],
                position: "absolute",
                bottom: -20,
                right: 0,
                zIndex: -1,
              })}
            >
              <RiDoubleQuotesR size={90} />
            </Box>
            <Text color="dimmed">
              <i>{quote.content}</i>
            </Text>
            <Text
              color="dimmed"
              sx={(theme) => ({
                fontSize: theme.fontSizes.sm,
                textAlign: "right",
              })}
            >
              <b>{quote.author}</b>
            </Text>
          </Stack>
        </Stack>
        <Image
          src={image}
          sx={(theme) => ({
            flex: 3,
            borderRadius: theme.radius.md,
            overflow: "hidden",
            boxShadow: theme.shadows.lg,
          })}
        />
      </Stack>
    </Center>
  );
};

export default Benefit;

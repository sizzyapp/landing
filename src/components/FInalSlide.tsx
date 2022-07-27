import { Center, Container, Stack, Text } from "@mantine/core";
import DownloadButton from "components/DownloadButton";

const FInalSlide: React.FC = () => {
  return (
    <Container
      sx={(theme) => ({
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
      })}
    >
      <Center>
        <Stack>
          <Text
            sx={(theme) => ({
              fontSize: theme.fontSizes.xl,
              opacity: 0.8,
            })}
          >
            Still not convinced?
          </Text>
          <Text
            sx={(theme) => ({
              fontSize: theme.fontSizes.xl,
              opacity: 0.8,
            })}
          >
            {"Don't worry our app has a dark theme."}
          </Text>

          <DownloadButton
            sx={{
              alignSelf: "start",
            }}
          >
            Download Now
          </DownloadButton>
        </Stack>
      </Center>
    </Container>
  );
};

export default FInalSlide;

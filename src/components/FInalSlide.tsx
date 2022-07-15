import {
  Button,
  Center,
  Container,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";

const FInalSlide: React.FC = () => {
  const { colors } = useMantineTheme();
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
            Don't worry our app has a dark theme.
          </Text>

          <Button
            variant="gradient"
            radius="xl"
            size="lg"
            gradient={{ from: colors.purple[4], to: colors.pink[6] }}
            sx={{
              alignSelf: "start",
            }}
          >
            Download Now
          </Button>
        </Stack>
      </Center>
    </Container>
  );
};

export default FInalSlide;

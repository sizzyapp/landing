import {
  Center,
  Container,
  createStyles,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import Quote from "components/Quote";

const useStyles = createStyles((theme) => ({
  inner: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan("lg")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
    },
    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  },
}));

const Benefit: React.FC<{
  title: string;
  description: string;
  quote?: {
    content: string;
    author: string;
  };
  image: string;
  actionText?: string;
}> = ({ title, description, image, quote, actionText }) => {
  const { classes } = useStyles();

  return (
    <Center
      sx={{
        minHeight: "95vh",
      }}
    >
      <Stack
        className={classes.inner}
        sx={(theme) => ({
          paddingTop: theme.spacing.xl * 4,
          paddingBottom: theme.spacing.xl * 4,
        })}
        spacing="xl"
      >
        <Container>
          <Stack sx={{ flex: 2 }} spacing="xl">
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
                {description}
              </Text>
            </Stack>
            {quote && <Quote {...quote} />}
          </Stack>
        </Container>

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
        {actionText && (
          <DownloadButton size="lg" label={actionText} variant="light" />
        )}
      </Stack>
    </Center>
  );
};

export default Benefit;

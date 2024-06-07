import { Container, Text, Title } from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import { Vertical } from "styles/layout-components";

const FinalSlide: React.FC = () => {
  return (
    <Container
      id="section-final-slide"
      sx={(theme) => ({
        paddingTop: 100,
        paddingBottom: 100,
      })}
    >
      <Vertical spacing="lg" center>
        <Vertical spacing="xs">
          <Title
            align="center"
            order={3}
            sx={(theme) => ({
              fontSize: theme.fontSizes.xl,
              opacity: 0.8,
            })}
          >
            Still not convinced?
          </Title>
          <Text
            align="center"
            sx={(theme) => ({
              fontSize: theme.fontSizes.xl,
              opacity: 0.8,
            })}
          >
            {"Don't worry, Sizzy has a dark theme too."}
          </Text>
        </Vertical>

        <DownloadButton />
      </Vertical>
    </Container>
  );
};

export default FinalSlide;

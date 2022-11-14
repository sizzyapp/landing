import { Center, Container, Image, Stack, Text, Title } from "@mantine/core";
import DownloadButton from "components/DownloadButton";
import LandingMDXPreview from "components/LandingMDXPreview/LandingMDXPreview";
import Quote from "components/Quote";
import { allTestimonials, allBenefits } from "contentlayer/generated";

const Benefit: React.FC<{
  slug;
}> = ({ slug }) => {
  let foundBenefit = allBenefits.find((b) => b.slug === slug);
  if (!foundBenefit) return null;
  const { title, image, testimonial: testimonialSlug, body } = foundBenefit;

  const testimonial = allTestimonials.find((t) => t.slug === testimonialSlug);
  return (
    <Center
      sx={{
        minHeight: "95vh",
      }}
    >
      <Stack spacing="xl">
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
                <LandingMDXPreview>{body.raw}</LandingMDXPreview>
              </Text>
            </Stack>
            {testimonial && <Quote {...testimonial} />}
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
        <DownloadButton size="lg" label="Get started" variant="light" />
      </Stack>
    </Center>
  );
};

export default Benefit;

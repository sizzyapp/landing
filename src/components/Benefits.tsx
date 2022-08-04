import { Center, Container, Stack, Title } from "@mantine/core";
import Benefit from "components/Benefit";

const Benefits: React.FC = () => {
  return (
    <Container size="xl" id="benefits">
      <Center>
        <Stack spacing="lg">
          <Title
            sx={{
              textAlign: "center",
              fontSize: 52,
              opacity: 0.8,
            }}
          >
            Benefits
          </Title>
          <Benefit
            title="Save Testing Time"
            description="You can test your websites on multiple devices
under multiple conditions in parallel.
A set of well-thought tools and features allow you to develop and test for all use-cases without having to manually simulate them in a regular browser."
            testimonialSlug="benefit-save-testing-time"
            image={
              "https://res.cloudinary.com/kitze/image/upload/v1659344615/Sizzy%20Landing/Benefits/save-testing-time.jpg"
            }
            actionText="Get started"
          />
          <Benefit
            title="Pretty Presentations"
            description="With Sizzy's highly customizable beautiful layouts and comprehensive screenshot and recording features, your design presentations will never look ugly."
            testimonialSlug="benefit-pretty-presentations"
            image={
              "https://res.cloudinary.com/kitze/image/upload/v1659344615/Sizzy%20Landing/Benefits/presentations.jpg"
            }
            actionText="Get started"
          />
          <Benefit
            title="Smooth Context Switching"
            description="Every project requires a slightly different development setup.
We understand the pain of context-switching when you are working on multiple projects. Sizzy makes this switch as seamless and intuitive as possible. All your data and configuration is saved with your project so you can pick up where you left off."
            testimonialSlug="benefit-smooth-context-switching"
            image={
              "https://res.cloudinary.com/kitze/image/upload/v1659344615/Sizzy%20Landing/Benefits/projects.jpg"
            }
            actionText="Get started"
          />
          <Benefit
            title="Better Ways to Investigate Visual Bugs"
            description="CSS bugs are hard to deal with. We get it. Sizzy comes with a bunch of new ways to investigate and play around with the styles of your webpage, saving you a lot of time and frustration."
            testimonialSlug="benefit-better-way-investigate-bugs"
            image={
              "https://res.cloudinary.com/kitze/image/upload/v1659344615/Sizzy%20Landing/Benefits/inspectcss.gif"
            }
            actionText="Get started"
          />
          <Benefit
            title="A Modern Workflow"
            description="Sizzy is for browsers what modern CI/CD is for deploying sites via FTP. Once you try Sizzy, you can never go back to using regular browsers for development."
            testimonialSlug="benefit-a-modern-workflow"
            image={
              "https://res.cloudinary.com/kitze/image/upload/v1659344615/Sizzy%20Landing/Benefits/misc.jpg"
            }
            actionText="Get started"
          />
        </Stack>
      </Center>
    </Container>
  );
};

export default Benefits;

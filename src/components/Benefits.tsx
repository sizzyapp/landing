import { Center, Container, Stack, Title } from "@mantine/core";
import Benefit from "components/Benefit";
import responsive from "assets/responsive.png";
import screenshot from "assets/screenshot.png";
import projects from "assets/projects.png";
import misc from "assets/misc.png";
import inspectcss from "assets/inspectcss.gif";

const Benefits: React.FC = () => {
  return (
    <Container id="benefits">
      <Center>
        <Stack>
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
            quote={{
              author: "Tim (@cstrnt)",
              content:
                "Recently migrated a site from global sass to css modules and just having the current production page and the development one next to each other with click & scroll sync is seriously a killer feature within @sizzyapp. Can really recommend it!",
            }}
            image={responsive.src}
          />
          <Benefit
            title="Pretty Presentations"
            description="With Sizzy's highly customizable beautiful layouts and comprehensive screenshot and recording features, your design presentations will never look ugly."
            quote={{
              author: "Eric Dingler, Owner @ In Transit Studios",
              content:
                "Sizzy is a powerful selling tool.  When we have a prospect who doesn't have a responsive site, when we show them their site on Sizzy, they are impressed and we look even more professional.",
            }}
            image={screenshot.src}
          />
          <Benefit
            title="Smooth Context Switching"
            description="Every project requires a slightly different development setup.
We understand the pain of context-switching when you are working on multiple projects. Sizzy makes this switch as seamless and intuitive as possible. All your data and configuration is saved with your project so you can pick up where you left off."
            quote={{
              author: "Mchepurnoy",
              content:
                "I use Sizzy to develop all my apps. Love projects feature, because I always have to switch between 3-4 projects. I enjoy overlay DevTools mode it helps me to easily debug my apps.",
            }}
            image={projects.src}
          />
          <Benefit
            title="Better Ways to Investigate Visual Bugs"
            description="CSS bugs are hard to deal with. We get it. Sizzy comes with a bunch of new ways to investigate and play around with the styles of your webpage, saving you a lot of time and frustration."
            quote={{
              author: "Manolis Papadakis, Software Engineer at NVIDIA",
              content:
                "As a UX/UI Designer Sizzy helps me test the designs I receive from developers and save time testing on different layouts/screen sizes. Also, I can experiment with html/css directly and get back with very specific feedback to them.",
            }}
            image={inspectcss.src}
          />
          <Benefit
            title="A Modern Workflow"
            description="Sizzy is for browsers what modern CI/CD is for deploying sites via FTP. Once you try Sizzy, you can never go back to using regular browsers for development."
            quote={{
              author: "ddeljanin",
              content:
                "It’s the bread to my web dev butter. I won’t shut up about it. I’m happy to show it off. I paid for it monthly when I had no job. It sped up how much ground I could cover for different devices compared to chrome dev tools.",
            }}
            image={misc.src}
          />
        </Stack>
      </Center>
    </Container>
  );
};

export default Benefits;

import { AppShell, Box, Container, Stack, Title } from "@mantine/core";
import { ResponsiveHeader } from "components/Header";
import MetaTags from "components/MetaTags";
import { allJobs } from "contentlayer/generated";
import pluralize from "pluralize";
import React from "react";
import { autoGrid } from "styled-mixins";
import { RealReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";
import { JobCard } from "./components";

const JobsPage: RealReactFC<{ allJobs: typeof allJobs }> = ({ allJobs }) => {
  const image = getMetaImage({
    preset: "netlify",
    logo: sizzyLogoUrl,
    title: "Browse Jobs at Sizzy",
    gradientColors: ["#412593", "#24145b", "#10062c"],
    ctaColor: "black",
    ctaBg: "#ffffff",
  });

  let jl = allJobs.length;
  let description = `${jl === 0 ? "No" : jl} open ${pluralize("position", jl)}`;

  return (
    <AppShell header={<ResponsiveHeader />}>
      <Container>
        <MetaTags
          url={`https://sizzy.co/jobs`}
          title="Jobs at Sizzy"
          description={description}
          image={image}
        />
        <Stack spacing="md">
          <Title order={1}>Jobs</Title>
          <Box {...autoGrid(300, 5)}>
            {allJobs.map((post) => (
              <JobCard post={post} key={post.title} />
            ))}
          </Box>
        </Stack>
      </Container>
    </AppShell>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allJobs,
    },
  };
}

export default JobsPage;

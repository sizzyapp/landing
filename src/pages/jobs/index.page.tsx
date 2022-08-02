import { AppShell, Container, Stack, Title } from "@mantine/core";
import Card from "components/Card";
import { ResponsiveHeader } from "components/Header";
import MagicGrid from "components/MagicGrid";
import MetaTags from "components/MetaTags";
import { allJobs } from "contentlayer/generated";
import NextLink from "next/link";
import pluralize from "pluralize";
import React from "react";
import { RealReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";

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
          <MagicGrid>
            {allJobs.map((post) => (
              <NextLink key={post.title} href={`/jobs/${post.slug}`}>
                <Card
                  title={post.title}
                  description={post.description}
                  badge={post.jobtype}
                />
              </NextLink>
            ))}
          </MagicGrid>
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

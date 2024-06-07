import { Container, Stack, Title } from "@mantine/core";
import Card from "components/Card";
import MagicGrid from "components/MagicGrid";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import { allBlogPosts, allJobs } from "contentlayer/generated";
import NextLink from "next/link";
import pluralize from "pluralize";
import React from "react";
import { ReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";

const JobsPage: ReactFC<{ allBlogPosts: typeof allBlogPosts }> = ({ allBlogPosts }) => {
  return null;

  const image = getMetaImage({
    preset: "netlify",
    logo: sizzyLogoUrl,
    title: "Sizzy Blog",
    gradientColors: ["#412593", "#24145b", "#10062c"],
    ctaColor: "black",
    ctaBg: "#ffffff",
  });

  let jl = allBlogPosts.length;
  let description = `${jl === 0 ? "No" : jl} open ${pluralize("position", jl)}`;

  return (
    <Shell>
      <Container>
        <MetaTags
          url={`https://sizzy.co/jobs`}
          title="Sizzy Blog"
          description={description}
          image={image}
        />
        <Stack spacing="md">
          <Title order={1}>Blog</Title>
          <MagicGrid>
            {allBlogPosts.map((post) => (
              <NextLink passHref key={post.title} href={`/blog/${post.slug}`}>
                <Card title={post.title} description={post.description} />
              </NextLink>
            ))}
          </MagicGrid>
        </Stack>
      </Container>
    </Shell>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allBlogPosts,
    },
  };
}

export default JobsPage;

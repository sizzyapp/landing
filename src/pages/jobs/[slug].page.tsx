import { Badge, Button, Container, Stack, Title } from "@mantine/core";
import BreadcrumbsComponent from "components/Breadcrumbs";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import { allJobs, Job } from "contentlayer/generated";
import React from "react";
import { ReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";

const JobPage: ReactFC<{ job: Job }> = ({ job }) => {
  const { title, body, slug, metaimageurl, jobtype } = job;

  return (
    <Shell>
      <Container>
        <MetaTags
          title={title}
          description={jobtype}
          url={`https://sizzy.co/jobs/${slug}`}
          image={
            metaimageurl ||
            getMetaImage({
              preset: "netlify",
              logo: sizzyLogoUrl,
              title: title,
              gradientColors: ["#412593", "#24145b", "#10062c"],
              ctaColor: "black",
              ctaBg: "#ffffff",
            })
          }
        />
        <Stack spacing="md">
          <BreadcrumbsComponent
            breadcrumbs={[
              { label: "Jobs", href: "/jobs" },
              {
                label: title,
                href: `/jobs/${slug}`,
              },
            ]}
          />
          <Stack align="start" spacing={10}>
            <Title
              sx={(theme) => ({
                color: theme.colors.gray[7],
              })}
            >
              {title}
            </Title>
            <Badge>{jobtype}</Badge>
          </Stack>
          <Stack align="start">
            <MarkdownContent>{body.raw}</MarkdownContent>
            <Button
              radius="xl"
              component="a"
              href={`mailto:contact@mg.sizzy.co?subject=${title}`}
              size="md"
            >
              Interested?
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Shell>
  );
};

export default JobPage;

export async function getStaticProps({ params }) {
  const job = allJobs.find((p) => p.slug === params.slug);

  return {
    props: {
      job,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allJobs.map((post) => ({
      params: {
        slug: post.slug.toString(),
      },
    })),
    fallback: false,
  };
}

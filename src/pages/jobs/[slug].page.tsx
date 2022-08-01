import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
} from "@chakra-ui/react";

import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import MetaTags from "components/MetaTags";
import { allJobs } from "contentlayer/generated";
import * as L from "layout-styled-components";
import NextLink from "next/link";
import { WrapperLayout } from "pages/page-layout";
import React from "react";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";
import Breadcrumbs from "components/Breadcrumbs";

const UseCaseArticlePage = ({ post }) => {
  const { title, body, slug, jobtype } = post;

  return (
    <WrapperLayout>
      <MetaTags
        title={title}
        description={jobtype}
        url={`https://sizzy.co/jobs/${slug}`}
        image={getMetaImage({
          preset: "netlify",
          logo: sizzyLogoUrl,
          title: title,
          gradientColors: ["#412593", "#24145b", "#10062c"],
          ctaColor: "black",
          ctaBg: "#ffffff",
        })}
      />
      <L.Vertical spacing={30}>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Jobs", href: "/jobs" },
            {
              label: title,
              href: `/jobs/${slug}`,
            },
          ]}
        />
        <L.Vertical spacing={10}>
          <Heading color="gray.700">{title}</Heading>
          <Badge colorScheme="purple">{jobtype}</Badge>
        </L.Vertical>
        <L.Vertical maxWidth={600}>
          <MarkdownContent>{body.raw}</MarkdownContent>
          <Button
            as="a"
            href={`mailto:contact@mg.sizzy.co?subject=${title}`}
            size="md"
            colorScheme="purple"
          >
            Interested?
          </Button>
        </L.Vertical>
      </L.Vertical>
    </WrapperLayout>
  );
};

export default UseCaseArticlePage;

export async function getStaticProps({ params }) {
  const posts = allJobs;
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: {
      post,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = allJobs;

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug.toString(),
      },
    })),
    fallback: false,
  };
}

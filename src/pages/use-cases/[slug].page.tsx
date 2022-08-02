import { Group } from "@mantine/core";
import BreadcrumbsComponent from "components/Breadcrumbs";

import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import MetaTags from "components/MetaTags";
import { allUseCases } from "contentlayer/generated";
import { WrapperLayout } from "pages/page-layout";
import React from "react";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";

const UseCaseArticlePage = ({ post }) => {
  const { title, body, slug, description } = post;

  return (
    <WrapperLayout>
      <MetaTags
        title={title}
        description={description}
        url={`https://sizzy.co/use-cases/${slug}`}
        image={getMetaImage({
          preset: "netlify",
          logo: sizzyLogoUrl,
          title: title,
          gradientColors: ["#412593", "#24145b", "#10062c"],
          ctaColor: "black",
          ctaBg: "#ffffff",
        })}
      />
      <Group spacing={50}>
        <BreadcrumbsComponent
          breadcrumbs={[
            { label: "Use Cases", href: "/use-cases" },
            {
              label: title,
              href: `/use-cases/${slug}`,
            },
          ]}
        />
        <MarkdownContent>{body.raw}</MarkdownContent>
      </Group>
    </WrapperLayout>
  );
};

export default UseCaseArticlePage;

export async function getStaticProps({ params }) {
  const posts = allUseCases;
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: {
      post,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = allUseCases;

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug.toString(),
      },
    })),
    fallback: false,
  };
}

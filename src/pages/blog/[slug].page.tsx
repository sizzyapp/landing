import {Container, Stack, Title} from "@mantine/core";
import BreadcrumbsComponent from "components/Breadcrumbs";
import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import {allBlogPosts, BlogPost} from "contentlayer/generated";
import React from "react";
import {RealReactFC} from "types";
import {getMetaImage, sizzyLogoUrl} from "utils/get-meta-image";

const JobPage: RealReactFC<{ blogPost: BlogPost }> = ({ blogPost }) => {
  const { title, description, body, slug } = blogPost;

  return (
    <Shell>
      <Container>
        <MetaTags
          title={title}
          description={description}
          url={`https://sizzy.co/blog/${slug}`}
          image={getMetaImage({
            preset: "netlify",
            logo: sizzyLogoUrl,
            title: title,
            gradientColors: ["#412593", "#24145b", "#10062c"],
            ctaColor: "black",
            ctaBg: "#ffffff",
          })}
        />
        <Stack spacing="md">
          <BreadcrumbsComponent
            breadcrumbs={[
              { label: "Blog", href: "/blog" },
              {
                label: title,
                href: `/blog/${slug}`,
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
          </Stack>
          <Stack align="start">
            <MarkdownContent>{body.raw}</MarkdownContent>
          </Stack>
        </Stack>
      </Container>
    </Shell>
  );
};

export default JobPage;

export async function getStaticProps({ params }) {
  const blogPost = allBlogPosts.find((p) => p.slug === params.slug);

  return {
    props: {
        blogPost,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allBlogPosts.map((post) => ({
      params: {
        slug: post.slug.toString(),
      },
    })),
    fallback: false,
  };
}

import { Stack } from "@mantine/core";
import BreadcrumbsComponent from "components/Breadcrumbs";
import DownloadButton from "components/DownloadButton";

import MarkdownContent from "components/MarkdownContent/MarkdownContent";
import MetaTags from "components/MetaTags";
import Shell from "components/Shell";
import { allFeatures, Feature } from "contentlayer/generated";
import FeatureMedia from "pages/features/FeatureMedia";
import React from "react";
import { ReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";

const FeaturePage: ReactFC<{ feature: Feature }> = ({ feature }) => {
  const { title, slug, description, image, video } = feature;

  return (
    <Shell>
      <MetaTags
        title={`Sizzy - ${title}`}
        description={`Sizzy feature: ${description}`}
        url={`https://sizzy.co/feature/${slug}`}
        image={getMetaImage({
          preset: "netlify",
          logo: sizzyLogoUrl,
          title: title,
          gradientColors: ["#412593", "#24145b", "#10062c"],
          ctaColor: "black",
          ctaBg: "#ffffff",
        })}
      />
      <Stack spacing={30}>
        <BreadcrumbsComponent
          breadcrumbs={[
            { label: "Features", href: "/features" },
            {
              label: title,
              href: `/features/${slug}`,
            },
          ]}
        />
        <Stack>
          <MarkdownContent>{description}</MarkdownContent>
          <FeatureMedia image={image} video={video} />
        </Stack>
        <DownloadButton center={false} size="lg" variant="light" />
      </Stack>
    </Shell>
  );
};

export default FeaturePage;

export async function getStaticProps({ params }) {
  const feature = allFeatures.find((p) => p.slug === params.slug);
  return {
    props: {
      feature,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allFeatures.map((feature) => ({
      params: {
        slug: feature.slug,
      },
    })),
    fallback: false,
  };
}

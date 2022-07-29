import { Box, Heading } from "@chakra-ui/react";
import MetaTags from "components/MetaTags";
import { LayoutProps } from "components/Layout";
import { allJobs } from "contentlayer/generated";
import * as L from "layout-styled-components";
import { WrapperLayout } from "pages/page-layout";
import React from "react";
import { autoGrid } from "styled-mixins";
import pluralize from "pluralize";
import { RealReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";
import { JobCard } from "./components";

const JobsPage: RealReactFC<LayoutProps & { allJobs: typeof allJobs }> = ({
  allJobs,
}) => {
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
    <WrapperLayout showCookieBanner={false}>
      <MetaTags
        url={`https://sizzy.co/jobs`}
        title="Jobs at Sizzy"
        description={description}
        image={image}
      />
      <L.Vertical spacing={20}>
        <Heading color="gray.700" size="lg">
          Jobs
        </Heading>
        <Box {...autoGrid(300, 5)}>
          {allJobs.map((post) => (
            <JobCard post={post} key={post.title} />
          ))}
        </Box>
      </L.Vertical>
    </WrapperLayout>
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

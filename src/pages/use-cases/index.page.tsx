import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import MetaTags from "components/MetaTags";
import { allUseCases } from "contentlayer/generated";
import * as L from "layout-styled-components";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";
import { UseCaseCard } from "./components";
import { WrapperLayout } from "pages/page-layout";
import { autoGrid } from "styled-mixins";
import { RealReactFC } from "types";

const UseCasesPage: RealReactFC<{ allUseCases: typeof allUseCases }> = ({
  allUseCases,
}) => {
  return (
    <WrapperLayout showCookieBanner={false}>
      <MetaTags
        title="Use cases for Sizzy"
        url={`https://sizzy.co/use-cases`}
        description="Learn why Sizzy is the best browser for frontend developers"
        image={getMetaImage({
          preset: "netlify",
          logo: sizzyLogoUrl,
          title: "Use cases for Sizzy",
          gradientColors: ["#412593", "#24145b", "#10062c"],
          ctaColor: "black",
          ctaBg: "#ffffff",
        })}
      />
      <L.Vertical spacing={20}>
        <Heading color="gray.700" size="lg">
          Use cases
        </Heading>
        <Box {...autoGrid(300, 5)}>
          {allUseCases.map((post) => (
            <UseCaseCard post={post} key={post.slug} />
          ))}
        </Box>
      </L.Vertical>
    </WrapperLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allUseCases,
    },
  };
}

export default UseCasesPage;

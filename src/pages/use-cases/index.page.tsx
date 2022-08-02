import { Header, Box, Group } from "@mantine/core";
import React from "react";
import MetaTags from "components/MetaTags";
import { allUseCases } from "contentlayer/generated";
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
      <Group spacing={20}>
        <Header height={1} sx={(t) => ({ color: t.colors.gray[7] })}>
          Use cases
        </Header>
        <Box sx={autoGrid(300, 15)}>
          {allUseCases.map((post) => (
            <UseCaseCard post={post} key={post.slug} />
          ))}
        </Box>
      </Group>
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

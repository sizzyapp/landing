import { Group, Header, Stack, Title } from "@mantine/core";
import Card from "components/Card";
import MagicGrid from "components/MagicGrid";
import MetaTags from "components/MetaTags";
import { allUseCases } from "contentlayer/generated";
import { WrapperLayout } from "pages/page-layout";
import React from "react";
import { RealReactFC } from "types";
import { getMetaImage, sizzyLogoUrl } from "utils/get-meta-image";

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
      <Stack spacing="md">
        <Title order={1}>Use Cases</Title>
        <MagicGrid>
          {allUseCases.map((post) => (
            <Card
              title={post.title}
              description={post.description}
              key={post.slug}
            />
          ))}
        </MagicGrid>
      </Stack>
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

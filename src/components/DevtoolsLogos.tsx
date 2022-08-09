import MagicGrid from "components/MagicGrid";
import Wrapper from "components/Wrapper";
import React from "react";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";
import { Image, Title, Text } from "@mantine/core";

const DevtoolsLogos: RealReactFC<{ logos: string[] }> = ({ logos }) => {
  let size = 70;
  return (
    <Wrapper id="devtools-logos" maxWidth={900}>
      <Vertical spacing={70}>
        <Vertical spacing="xs" center>
          <Title align="center" sx={(t) => ({ color: t.colors.purple[4] })}>
            Comes out of the box with your favorite extensions
          </Title>
          <Text
            align="center"
            size={18}
            sx={(t) => ({ color: t.colors.gray[7] })}
          >
            Just enable the extensions you need from the settings and you're
            ready to go!
          </Text>
        </Vertical>
        <MagicGrid
          fallBackToOneColumn={false}
          rowGap={30}
          gap={80}
          width={size}
        >
          {logos.map((l) => (
            <Image
              sx={{ width: size, height: size }}
              src={`/devtools-logos/${l}`}
            />
          ))}
        </MagicGrid>
      </Vertical>
    </Wrapper>
  );
};

export default DevtoolsLogos;

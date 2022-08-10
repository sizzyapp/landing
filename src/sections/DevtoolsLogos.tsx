import BadassTitle, { Highlight } from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import Wrapper from "components/Wrapper";
import React from "react";
import { Vertical } from "styles/layout-components";
import { fontSize } from "styles/mixin";
import { RealReactFC } from "types";
import { Image, Title, Text } from "@mantine/core";

const DevtoolsLogos: RealReactFC<{ logos: string[] }> = ({ logos }) => {
  let size = 70;
  return (
    <Wrapper id="devtools-logos" maxWidth={900}>
      <Vertical fullW spacing={70}>
        <Vertical fullW spacing="lg" center>
          <BadassTitle maxWidth="auto">
            Comes out of the box with your <Highlight> favorite </Highlight>{" "}
            devtools extensions
          </BadassTitle>
          <Text
            align="center"
            sx={(t) => ({ ...fontSize(22), color: t.colors.gray[7] })}
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

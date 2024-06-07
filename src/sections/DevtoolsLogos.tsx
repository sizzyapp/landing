import { Image } from "@mantine/core";
import BadassTitle, { Highlight } from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import Text from "components/mantine/Text";
import Wrapper from "components/Wrapper";
import React from "react";
import { Vertical } from "styles/layout-components";
import { ReactFC } from "types";

const DevtoolsLogos: ReactFC<{ logos: string[] }> = ({ logos }) => {
  let size = 70;
  return (
    <Wrapper id="devtools-logos" maxWidth={900}>
      <Vertical fullW spacing={70}>
        <Vertical fullW spacing="lg" center>
          <BadassTitle maxWidth="auto">
            Comes out of the box with your <Highlight> favorite </Highlight> devtools extensions
          </BadassTitle>
          <Text align="center" fontSize={22} color="gray.7">
            Just enable the extensions you need from the settings and you're ready to go!
          </Text>
        </Vertical>
        <MagicGrid fallBackToOneColumn={false} rowGap={30} gap={80} width={size}>
          {logos.map((l) => (
            <Image sx={{ width: size, height: size }} src={`/devtools-logos/${l}`} />
          ))}
        </MagicGrid>
      </Vertical>
    </Wrapper>
  );
};

export default DevtoolsLogos;

import MagicGrid from "components/MagicGrid";
import React from "react";
import { RevealChildren, RevealMode } from "react-genie";
import { Animation } from "react-genie-with-emotion";
import { Vertical } from "styles/layout-components";
import logos from "pages/customers/LogoSection/logos-config";

//styles
import * as S from "pages/customers/LogoSection/styles";

const LogoSection: React.FC = () => {
  return (
    <Vertical className="sizzy-purple-3" sx={{ width: "100" }}>
      <MagicGrid width={150} gap={10}>
        {/* @ts-ignore */}
        {logos.map((logo) => (
          <S.Logo width={logo.width} src={logo.src} />
        ))}
      </MagicGrid>
    </Vertical>
  );
};

export default LogoSection;

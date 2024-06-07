import MagicGrid from "components/MagicGrid";
import React from "react";
import { Vertical } from "styles/layout-components";
import logos from "pages/customers/CompanyLogos/logos-config";

//styles
import * as S from "pages/customers/CompanyLogos/styles";

const CompanyLogos: React.FC = () => {
  return (
    <Vertical center fullW>
      <MagicGrid rowGap={40} width={150} gap={10}>
        {/* @ts-ignore */}
        {logos.map((logo) => (
          <S.Logo width={logo.width} src={logo.src} />
        ))}
      </MagicGrid>
    </Vertical>
  );
};

export default CompanyLogos;

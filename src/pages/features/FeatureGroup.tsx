import BadassTitle from "components/BadassTitle";
import { Subtitle } from "components/Subtitle";
import Feature, { FeatureLayout } from "pages/features/Feature";
import React, { ReactNode } from "react";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";

export const FeatureGroup: RealReactFC<{
  title: ReactNode;
  subtitle: ReactNode;
  slugs: string[];
  id: string;
}> = ({ title, subtitle, id, slugs }) => {
  return (
    <Vertical id={id} fullW spacing="xl">
      <Vertical center spacing="md">
        <BadassTitle maxWidth="auto">{title}</BadassTitle>
        <Subtitle>{subtitle}</Subtitle>
      </Vertical>

      <Vertical fullW spacing={170}>
        {slugs.map((s, i) => (
          <Feature
            inverse={i % 2 === 0}
            layout={FeatureLayout.Horizontal}
            key={s}
            findBySlug={s}
          />
        ))}
      </Vertical>
    </Vertical>
  );
};

import BadassTitle, { Highlight } from "components/BadassTitle";
import MagicGrid from "components/MagicGrid";
import React from "react";
import { Graph } from "sections/GraphSection/graph";
import { Metric } from "sections/GraphSection/metric";
import MaintainedSection from "sections/MaintainedSection";
import { Vertical } from "styles/layout-components";

const GraphSection = () => {
  return (
    <Vertical fullW spacing={80} center sx={{ zIndex: 1 }}>
      <BadassTitle maxWidth="auto">
        We're working <Highlight>hard</Highlight> to make Sizzy the best developer toolkit ever
      </BadassTitle>
      <Graph />
      <MagicGrid rowGap={40} width={250}>
        <Metric number={11519} title="commits" />
        <Metric number={738} title="releases" />
        <Metric number={100} title="shipped features" />
      </MagicGrid>
      <MaintainedSection />
    </Vertical>
  );
};

export default GraphSection;

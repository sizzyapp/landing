import { allFeatures, Feature } from "contentlayer/generated";
import React from "react";
import { Beacon } from "sections/MainImageSection/beacon";

const findFeatureBySlug = (slug: string): Feature =>
  allFeatures.find((f) => f.slug === slug);

export const Beacons = () => {
  let firstRowY = 1.3;
  let secondRowY = firstRowY + 4;
  return (
    <>
      <Beacon x="13%" y={firstRowY}>
        {findFeatureBySlug("projects").description}
      </Beacon>
      <Beacon x="19%" y={firstRowY}>
        One click to open the current project in your code editor or file
        explorer
      </Beacon>
      <Beacon x="75%" y={firstRowY}>
        All the useful plugins you might need as a developer: Kill a port, Grid
        overlay, Debug CSS, Page Navigator, etc.
      </Beacon>
      <Beacon x="88%" y={firstRowY}>
        {findFeatureBySlug("photo-studio")?.description}
      </Beacon>
      <Beacon x="12%" y={secondRowY}>
        {findFeatureBySlug("session-manager")?.description}
      </Beacon>
    </>
  );
};

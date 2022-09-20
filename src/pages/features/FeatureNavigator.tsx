import { useWindowScroll } from "@mantine/hooks";
import Text from "components/mantine/Text";
import React from "react";
import { HEADER_HEIGHT } from "sections/HeaderSection/Header";
import { Horizontal, Vertical } from "styles/layout-components";

const featureGroups = [
  { title: "Responsive", id: "responsive" },
  { title: "Views", id: "views" },
  { title: "CSS", id: "css" },
  { title: "Simulations", id: "simulations" },
  { title: "Screenshots", id: "screenshots" },
  { title: "Content", id: "content" },
];
export const FeatureNavigator = () => {
  const [scroll, scrollTo] = useWindowScroll();
  let fixedHeader = scroll.y >= HEADER_HEIGHT;

  return (
    <Horizontal
      center
      fullW
      spacing={100}
      noWrap
      py={15}
      sx={(t) => ({
        position: "fixed",
        left: 0,
        right: 0,
        overflow: "auto",
        background: "white",
        transition: "all 100ms linear",
        top: HEADER_HEIGHT,
        zIndex: 999,
        borderTop: `1px solid ${t.colors.gray[1]}`,
        boxShadow: `-1px 7px 11px 0px rgb(0 0 0 / 8%)`,
        opacity: fixedHeader ? 1 : 0,
      })}
    >
      {featureGroups.map((f, i) => (
        <Vertical spacing="xs" center>
          <Text fontSize={15} color="gray.5" weight="bold" align="center">
            {i}
          </Text>
          <Text fontSize={15} color="gray.5" weight="bold" align="center">
            {f.title}
          </Text>
        </Vertical>
      ))}
    </Horizontal>
  );
};

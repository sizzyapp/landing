import { ThemeIcon, Title } from "@mantine/core";
import MagicGrid from "components/MagicGrid";
import Text from "components/mantine/Text";
import React from "react";
import { FcHeatMap, FcOk, FcPrivacy } from "react-icons/fc";
import { Vertical } from "styles/layout-components";
import { RealReactFC } from "types";

const MaintainedSection = () => {
  return (
    <MagicGrid width={250} rowGap={40}>
      <Feature icon={FcOk} title="Secure & up to date">
        We make sure that Sizzy is always up to date with the latest Electron
        and Chromium versions.
      </Feature>
      <Feature icon={FcPrivacy} title="Privacy first">
        We don't care about your localhost URLs. We don't store any of your
        history, even locally.
      </Feature>
      <Feature icon={FcHeatMap} title="Actively maintained">
        The commits speak for themselves. We're squashing bugs and releasing new
        features almost every week.
      </Feature>
    </MagicGrid>
  );
};

const Feature: RealReactFC<{ icon: any; title: string }> = ({
  icon: Icon,
  title,
  children,
}) => {
  return (
    <Vertical center spacing="sm">
      <ThemeIcon
        sx={(t) => ({
          color: t.colors.purple[3],
          background: "none",
          width: "auto",
          height: "auto",
        })}
        radius="sm"
      >
        <Icon fontSize={70} />
      </ThemeIcon>
      <Title sx={(t) => ({ color: t.colors.gray[8] })} order={3} align="center">
        {title}
      </Title>
      <Text color="gray.7" align="center">
        {children}
      </Text>
    </Vertical>
  );
};

export default MaintainedSection;

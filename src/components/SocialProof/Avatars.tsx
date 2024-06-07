import { ReactFC } from "../../types";
import { Horizontal, Vertical } from "../../styles/layout-components";
import Laurel from "../../sections/HeroSection/Laurel";
import { Text } from "@mantine/core";
import React from "react";

const Award: ReactFC<{ title: string }> = ({ children, title }) => {
  let laurelSize = 30;

  return (
    <Horizontal center spacing={0}>
      <Laurel size={laurelSize} />
      <Horizontal spacing="sm">
        <Vertical spacing={0} center>
          <Text sx={(t) => ({ color: t.colors.gray[8] })} size="sm" weight={800}>
            {title}
          </Text>
          <Text size="xs" sx={(t) => ({ color: t.colors.gray[8] })}>
            {children}
          </Text>
        </Vertical>
      </Horizontal>

      <Laurel mirror={true} size={laurelSize} />
    </Horizontal>
  );
};

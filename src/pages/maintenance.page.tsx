import React from "react";
import { NextPage } from "next";
import { Image, Text, Title } from "@mantine/core";

import { Vertical } from "styles/layout-components";
import Shell from "components/Shell";

const MaintenancePage: NextPage = () => {
  return (
    <Shell padding={64} wrapper={false}>
      <Vertical spacing="xl" centerV>
        <Title>We're doing some maintenance and we'll be back soon</Title>

        <Vertical centerV>
          <Image src="https://res.cloudinary.com/kitze/image/upload/v1659952592/Sizzy%20Landing/Team/DyVCoN9X0AAj6zO.jpg" />
          <Text>Cute dog picture while you wait</Text>
        </Vertical>
      </Vertical>
    </Shell>
  );
};

export default MaintenancePage;

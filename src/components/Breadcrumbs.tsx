import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RealReactFC } from "types";
import { Anchor, Breadcrumbs } from "@mantine/core";

const BreadcrumbsComponent: RealReactFC<{
  breadcrumbs: { label: string; href: string }[];
}> = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs>
      {breadcrumbs.map(({ label, href }) => (
        <NextLink passHref={true} href={href}>
          <Anchor>{label}</Anchor>
        </NextLink>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;

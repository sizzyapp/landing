import { Anchor, Breadcrumbs } from "@mantine/core";
import NextLink from "next/link";
import React from "react";
import { ReactFC } from "types";

const BreadcrumbsComponent: ReactFC<{
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

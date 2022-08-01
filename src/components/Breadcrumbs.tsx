import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RealReactFC } from "types";

const Breadcrumbs: RealReactFC<{
  breadcrumbs: { label: string; href: string }[];
}> = ({ breadcrumbs }) => {
  return (
    <Breadcrumb>
      {breadcrumbs.map(({ label, href }) => (
        <BreadcrumbItem>
          <NextLink passHref={true} href={href}>
            <BreadcrumbLink href="#">{label}</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

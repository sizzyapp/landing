import { Menu } from "@mantine/core";
import HeaderButton from "sections/HeaderSection/HeaderButton";
import NextLink from "next/link";
import { LinkType, ReactFC } from "types";

export const HeaderMenu: ReactFC<{ title: string; links: LinkType[] }> = ({ title, links }) => {
  return (
    <Menu trigger="hover" shadow="md" width={200}>
      <Menu.Target>
        <HeaderButton>{title}</HeaderButton>
      </Menu.Target>

      <Menu.Dropdown>
        {/*<Menu.Label>Application</Menu.Label>*/}
        {links.map((l) => (
          <NextLink passHref href={l.link} key={l.link}>
            <Menu.Item component="a">{l.label}</Menu.Item>
          </NextLink>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

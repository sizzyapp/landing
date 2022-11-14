import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ColorScheme } from "@mantine/core";
import { setCookie } from "cookies-next";

export const useColorSchemeManager = (colorSchemeFromCookie: ColorScheme) => {
  const preferredColorScheme = useColorScheme();

  let COOKIE_KEY = "mantine-color-scheme";

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: COOKIE_KEY,
    defaultValue: colorSchemeFromCookie || preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");

    setColorScheme(nextColorScheme);
    setCookie(COOKIE_KEY, nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return { colorScheme, toggleColorScheme };
};

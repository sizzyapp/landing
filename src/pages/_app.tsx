import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "styles/global.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Sizzy</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
          primaryColor: "purple",
          primaryShade: 4,
          colors: {
            purple: [
              "#f4e8ff",
              "#d6c0f4",
              "#b897e8",
              "#9c6fde",
              "#8046d3",
              "#662cb9",
              "#502291",
              "#391869",
              "#220e41",
              "#0d031b",
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

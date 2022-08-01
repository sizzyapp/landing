import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "styles/global.css";
import { useGoogleAnalytics, useOnPageLoad } from "../utils/utils";

const socialImage =
  "https://api.microlink.io/?adblock=false&waitForTimeout=1500&meta=false&screenshot&element=%23screenshot&embed=screenshot.url&url=https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dapple-financial%26logo%3Dhttps%253A%252F%252Fsizzy-temp-landing.onrender.com%252Flogo.png%26bg%3D%2523fff%26marker%3DDownload%2Bnow%26title%3D%253Cb%253ESizzy%253C%252Fb%253E%2B%2B%253Cbr%2B%252F%253E%2BThe%2Blast%2Bdeveloper%2Btool%2Byou%2Bneed.%26p%3DDwPgUABBwEIPYA9JQgZwQXgN5eSiADnKgJYAuJcAdgFwQDkATgKYA2AhhQG7P0A0eFACN2AYwDWAc0ZwArlQAmdAI6zmjAJ4A6IZIH4oAM2pkAYuwC2JVhpqD89ALTsCBVs0eoNqMswt8IGFYSKnEAWTEAZW9fC1MTAIBBRhJ2VgDUdipUT3USQ357QgQ6AHYADn0DAlsIUoAWQQBfJuRwfGAASQt2SWYi9GxcAxQehAAJZhJJAAsyOgBGACZKoqgFElQ3dlr6IVY4CUKRqAshRfqqkYtWOnolggR6IpaBxlFsVXVtA8k4VvwAHpwIJgAAVZgIMgDTA4NYQDZbDi7faHcTHE7GKhkSIkABezDo9QAbFcDFiyAB1KazeYQJYABgZZPwwSozEm0zmiy0DIArCyUO4yL5GJECGIQpI6AytAL4aI4AdGCo1JotIrlYLTucIHziS8AQYFFk%252BjJZKgbJFmGROlR2YxxmCwgAZIYQAD6HrmN1V3y0FDI7ggryBII6EKhMKG8IpuIJi1WJwgFOpXLpAGYmdqIJq4CqIF91XnGIaiiaqGa5JaNNbbfb1E7Xe6vT7boW1doKBZmCGjVB2ihgIDI2Rw0PR9G4cmS37i0r8zmiKQKNQ7uwhKglbJfBiRmQ4AQ6EtSfCUrS6Bmk5iTPHCRAFteRqmadyIFnmfDfFCwYwsqhjEYCw7lkVx1FEdhUF4Mt8EHfAsCLbQekYcR1H7aAR0hMdkGHeAEHAYcQCAA%26time%3D%2B%253Cb%253EDevelop%252C%2Bdebug%2Band%2Btest%253C%252Fb%253E%2Byour%2Bwebsite%2Bwith%2Bease%2Band%2Bspeed.%26color%3D%2523333333%23";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const pageLoaded = useOnPageLoad();

  useGoogleAnalytics({
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID as string,
    startLoading: pageLoaded,
    delay: 100,
  });

  return (
    <>
      <Head>
        <title>Sizzy — The last developer tool you need.</title>
        <meta
          name="title"
          content="Sizzy — The last developer tool you need."
        />
        <meta
          name="description"
          content="Develop, debug and test your website with ease and speed. Intuitive and quick development tools help you focus on your product and ideas."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sizzy.co/" />
        <meta
          property="og:title"
          content="Sizzy — The last developer tool you need."
        />
        <meta
          property="og:description"
          content="Develop, debug and test your website with ease and speed. Intuitive and quick development tools help you focus on your product and ideas."
        />

        <meta property="twitter:url" content="https://sizzy.co/" />
        <meta
          property="twitter:title"
          content="Sizzy — The last developer tool you need."
        />
        <meta
          property="twitter:description"
          content="Develop, debug and test your website with ease and speed. Intuitive and quick development tools help you focus on your product and ideas."
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="image" content={socialImage} />
        <meta itemProp="image" content={socialImage} />
        <meta name="twitter:image" content={socialImage} />
        <meta property="og:image" content={socialImage} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
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
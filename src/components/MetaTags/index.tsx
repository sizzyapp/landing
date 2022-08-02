import React from "react";
import Head from "next/head";

export const MetaTags: React.FC<{
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
}> = ({
  url = `https://sizzy.co`,
  title = `Sizzy - The Browser For Developers`,
  description = `Stop wasting time and speed up your development workflow`,
  image = url + `/images/meta.png`,
  favicon = `/favicon.icon`,
}) => {
  return (
    <Head>
      <title>Sizzy</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
        rel="stylesheet"
      />

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="iv0x4NzlwIf39V00PHw-dyq93NI59eOydW7v_FF0Z_4"
      />

      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#20164e" />

      {/*  meta */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/*  twitter */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default MetaTags;

import { Text, Title } from "@mantine/core";
import MagicGrid from "components/MagicGrid";
import Quote from "components/Quote";
import Shell from "components/Shell";
import { tweetIds } from "config/tweets";
import { allTestimonials } from "contentlayer/generated";
import { GetStaticProps } from "next";
import Tweets from "pages/customers/Tweets";
import React from "react";
import { Vertical } from "styles/layout-components";
import { getTweets } from "utils/get-tweets";

const CustomersPage = ({ tweets = [] }) => {
  let customerTestimonials = (
    <Vertical spacing="xl" center>
      <Vertical spacing="sm" center>
        <Title order={1}>Customers</Title>
        <Text>
          Sizzy is the tool of choice for category leading and fast growing
          companies
        </Text>
      </Vertical>
      <MagicGrid gap={60}>
        {allTestimonials.map((testimonial) => (
          <Quote {...testimonial} />
        ))}
      </MagicGrid>
    </Vertical>
  );

  let tweetTestimonials = (
    <Vertical spacing="xl">
      <Vertical center spacing="sm">
        <Title order={1}>Testimonials</Title>
        <Text>Hear what our users have to say about us</Text>
      </Vertical>

      <Tweets tweets={tweets} />
    </Vertical>
  );

  return (
    <Shell>
      <Vertical spacing={100}>
        {customerTestimonials}
        {tweetTestimonials}
      </Vertical>
    </Shell>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const tweets = await getTweets(tweetIds);
    return { props: { tweets } };
  } catch (error) {
    console.log(error);
    return { props: { tweets: [] } };
  }
};

export default CustomersPage;

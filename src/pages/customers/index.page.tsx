import { Center, Stack, Text, Title } from "@mantine/core";
import Shell from "components/Shell";
import { tweetIds } from "config/tweets";
import { GetStaticProps } from "next";
import Tweets from "pages/customers/Tweets";
import React from "react";
import { getTweets } from "utils/get-tweets";

const CustomersPage = ({ tweets = [] }) => {
  return (
    <Shell>
      {/*<Center>
        <Stack align="center">
          <Title order={1}>Customers</Title>
          <Text>
            Sizzy is the tool of choice for category leading and fast growing
            companies
          </Text>
        </Stack>
      </Center>*/}

      <Center>
        <Stack spacing="xl" align="center">
          <Stack align="center" spacing={0}>
            <Title order={1}>Testimonials</Title>
            <Text>Hear what our users have to say about us</Text>
          </Stack>

          <Tweets tweets={tweets} />
        </Stack>
      </Center>
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

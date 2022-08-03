import { Text, Title, Center, Stack } from "@mantine/core";
import Shell from "components/Shell";
import { GetStaticProps } from "next";
import Testimonials from "pages/customers/Testimonials";
import React from "react";
import { getTweets } from "utils/get-tweets";

const CustomersPage = ({ tweets = [] }) => {
  console.log("tweets", tweets);
  return (
    <Shell>
      <Center>
        <Stack align="center">
          <Title order={1}>Customers</Title>
          <Text>
            Sizzy is the tool of choice for category leading and fast growing
            companies
          </Text>
        </Stack>
      </Center>

      <Center>
        <Stack align="center">
          <Title order={1}>Testimonials</Title>
          <Text>Don't trust us yet? Hear what these people have to say</Text>
        </Stack>
      </Center>
      <Testimonials />
    </Shell>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const tweetIds = [
      1533070946868908033, 1531564027364749312, 1524900758008877057,
      1524137220403257347, 1518936689066090501, 1518589033320005632,
      1515868633246978048, 1512014869679194114, 1509817803645194241,
      1500509621366272006, 1499656851218120705, 1493894788399403011,
      1493242286611832840, 1489938318850928645, 1486983185162543113,
      1484134737862090754, 1481035811302907911, 1451666374972018689,
      1437952345841799175, 1436466768634003456, 1436083943586115587,
      1423006196634734598, 1405178570767409156, 1399717038273273862,
      1365420246597795847, 1367127068207677450, 1359217382405910529,
      1342834622690975745, 1342645651813896193, 1332019045424635904,
      1320370551710470146, 1317762662839865345, 1305210002483838976,
      1301400744575332354, 1292920419901755393, 1284135725181612033,
      1263779687936987136, 1263810452133425157, 1258382995574095873,
      1255104219381665793, 1205154192236699648,
    ];
    const tweets = await getTweets(tweetIds);
    return { props: { tweets } };
  } catch (error) {
    console.log(error);
    return { props: { tweets: [] } };
  }
};

export default CustomersPage;

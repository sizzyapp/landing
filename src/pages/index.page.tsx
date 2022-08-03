import Benefits from "components/Benefits";
import FinalSlide from "components/FinalSlide";
import { Hero } from "components/Hero/hero";
import Shell from "components/Shell";
import Wrapper from "components/Wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Shell padding={0} wrapper={false}>
      <Hero />
      <Wrapper>
        <Benefits />
        <FinalSlide />
      </Wrapper>
    </Shell>
  );
};

export default Home;

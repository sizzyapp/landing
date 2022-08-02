import Benefits from "components/Benefits";
import FinalSlide from "components/FinalSlide";
import { Hero } from "components/Hero";
import Shell from "components/Shell";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Shell wrapper={false}>
      <Hero />
      <Benefits />
      <FinalSlide />
    </Shell>
  );
};

export default Home;

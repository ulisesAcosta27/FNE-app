import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import Hero from "../components/ui/Hero";

const Home: NextPage = () => {
  return (
    <Layout title={"marron"}>
      <Hero />
      {/* <Button>Hola Mundo develop</Button> */}
    </Layout>
  );
};

export default Home;

import { Button } from "@mantine/core";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title={"marron"}>
      <Button>Hola Mundo production</Button>
    </Layout>
  );
};

export default Home;

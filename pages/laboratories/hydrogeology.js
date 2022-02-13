import Head from "next/head";
import Image from "next/image";

import Layout from "../../src/components/layout/layout";
import Hydrogeology from "../../src/components/hydrogeology/hydrogeology";

export default function hydrogeology() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hydrogeology />
      </Layout>
    </>
  );
}

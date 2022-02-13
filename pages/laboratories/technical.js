import Head from "next/head";
import Image from "next/image";

import Layout from "../../src/components/layout/layout";
import Technical from "../../src/components/technical/technical";

export default function technical() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Technical />
      </Layout>
    </>
  );
}

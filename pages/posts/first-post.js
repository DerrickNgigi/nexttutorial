import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>FirstPost</h1>

      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </Layout>
  );s
}

export default FirstPost;

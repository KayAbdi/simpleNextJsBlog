import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h2>
            <h1>
                First Post<br></br>
                <img src="/images/maanka.jpeg" alt="Vercel" className="logo" />
            </h1>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
    </>
  );
}


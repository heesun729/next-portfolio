import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Image from 'next/image';
import Name from '../public/name.jpg';
export default function Home() {
    return (
        <Layout>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="pkkheesun'\s portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Hero />
                    <Image src={Name} width={500} alt="name" className="animate-motion" />
                </div>
            </section>
        </Layout>
    );
}

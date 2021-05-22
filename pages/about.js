import Head from 'next/head'

import Layout from '../components/layout'

export default function About () {
    return (
        <Layout>
            <Head>
                <title>Portfolio | Dylan McGee </title>
                <meta name = "description" content = "An about page about Dylan McGee"/>
            </Head>
            <h1>Portfolio</h1>
        </Layout>
    )
}
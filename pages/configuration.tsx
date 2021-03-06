import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useFetchTwelveProductsQuery } from '../generated/graphql'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useFetchTwelveProductsQuery()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="text-white">Saleor App Template - Configuration</div>
        {JSON.stringify(data)}
      </main>
    </div>
  )
}

export default Home

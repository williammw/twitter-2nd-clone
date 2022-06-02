import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/SIdebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2nd Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <Sidebar/>
          {/* Feed */}
          {/* Widgets */}
        </main>
    </div>
  )
}

export default Home

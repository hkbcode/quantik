import Head from 'next/head'
import { Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> This is chakra UI </h1>
      <Button colorScheme="blue">Start Coding</Button>


    </div>
  )
}

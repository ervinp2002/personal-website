import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return <>
    <Head>  
      <title>Personal Website</title>
    </Head>
    <div className="pt-2">
      <h1 className="text-3xl text-blue-300 font-bold text-center">Hello World!</h1>
    </div>
    </>
};  

export default Home;
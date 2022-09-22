import type { NextPage } from 'next';
import ReactGA from 'react-ga4';
import * as React from 'react';
import { About } from '../src/components/layout/About';

ReactGA.initialize('G-WZDMJZ6D6Q');
ReactGA.send('pageview');

const Home: NextPage = ({ data }: any) => {
  return <About data={data} />;
};
export default Home;

export async function getServerSideProps() {
  return {
    props: {
      data: '페이지를 준비중 입니다.',
      env: process.env.name,
    },
  };
}

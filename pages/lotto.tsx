import type { NextPage } from 'next';
import ReactGA from 'react-ga4';
import { Lotto } from '../src/components/layout/Lotto';
import { getLottoNumbers } from '../src/api/lotto';

ReactGA.initialize('G-WZDMJZ6D6Q');
ReactGA.send('pageview');

const Home: NextPage = ({ data }: any) => {
  return <Lotto data={data} />;
};
export default Home;

export async function getServerSideProps() {
  return {
    props: {
      data: await getLottoNumbers(),
      env: process.env.name,
    },
  };
}

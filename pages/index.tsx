import type { NextPage } from 'next';
import { Main } from '../src/components/layout/Main';
import { getGoogleRss } from '../src/api/google';
import { DEV, SERVER_SIDE } from '../src/config/Constant';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-WZDMJZ6D6Q');
ReactGA.send('pageview');

const Home: NextPage = ({ data, env }: any) => {
  return <Main data={data} env={env} />;
};
export default Home;

export async function getServerSideProps() {
  const env = process.env.name;
  // if (env === DEV) {
  //   await makeSitemap();
  // }
  const google = await getGoogleRss(SERVER_SIDE);
  return {
    props: {
      data: {
        google: google,
        nate: '',
        daum: '',
      },
      env: process.env.name,
    },
  };
}

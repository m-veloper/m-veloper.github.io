import { Googles } from '../../api/google';
import Clock from 'react-live-clock';
import { Meta } from './Meta';
import { GoogleMetaConfig } from '../../config/MetaConfig';
import styles from '../../../styles/Home.module.css';
import { Google } from '../searchList/Google';

type MainProps = {
  data: {
    google: Googles[];
    nate: '';
    daum: '';
  };
  env: string;
};

const Main = (props: MainProps) => {
  return (
    <div className={styles.container}>
      <Meta
        title={GoogleMetaConfig.title}
        description={GoogleMetaConfig.description}
        locale={GoogleMetaConfig.locale}
        site_name={GoogleMetaConfig.site_name}
        url={GoogleMetaConfig.url}
      />
      <main className={styles.main}>
        <p style={{ fontSize: '2.5rem', marginBottom: 0 }}>
          현재 <strong style={{ color: '#0070f3' }}>실시간 검색어</strong>
        </p>
        <h3>
          <Clock format={'YYYY 년 MM 월 DD 일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
        </h3>
        <Google google={props.data.google} env={props.env} />
      </main>
    </div>
  );
};

export { Main };

import Clock from 'react-live-clock';
import { Meta } from './Meta';
import { LottoMetaConfig } from '../../config/MetaConfig';
import styles from '../../../styles/Home.module.css';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';

type LottoProps = {
  data: {
    times: string;
    number: string[];
    winInfo: WinInfo;
  };
};

type WinInfo = {
  totSellamnt: string;
  returnValue: string;
  drwNoDate: string;
  firstWinamnt: string;
  firstPrzwnerCo: string;
  firstAccumamnt: string;
  drwNo: string;
  drwtNo1: string;
  drwtNo2: string;
  drwtNo3: string;
  drwtNo4: string;
  drwtNo5: string;
  drwtNo6: string;
  bnusNo: string;
};

const Lotto = ({ data }: LottoProps) => {
  return (
    <div className={styles.container}>
      <Meta
        title={LottoMetaConfig.title}
        description={LottoMetaConfig.description}
        locale={LottoMetaConfig.locale}
        site_name={LottoMetaConfig.site_name}
        url={LottoMetaConfig.url}
      />
      <main className={styles.main}>
        <p style={{ fontSize: '2.5rem', marginBottom: 0 }}>
          <strong style={{ color: '#0070f3' }}>{data.times}회 인공지능 로또 번호 추천</strong>
          <p style={{ textAlign: 'center', marginBottom: 10, fontSize: '1rem', color: '#0070f3' }}>
            [ 본 데이터는 <a href="https://animalface.site/lotto.html">"조코딩"</a> 님의 데이터를
            기반으로 합니다. ]
          </p>
        </p>
        <h3>
          <Clock format={'YYYY 년 MM 월 DD 일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
        </h3>
        <div className={styles.grid} style={{ flexDirection: 'column' }}>
          <div className={styles.card} style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: 10, fontSize: '1rem' }}>
              딥러닝(LSTM)을 활용하여 로또 번호를 예측.
            </p>
            <p style={{ marginBottom: 35, fontSize: '0.8rem', color: 'red' }}>
              로또는 독립시행 확률이라 예측 모델이 의미가 없지만
              <br />
              유료 서비스보다는 무료로 사용해 보세요.
            </p>
            {data.number.map((value: any, index: any) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                <div style={{ width: '100%' }}>
                  <Button variant="outlined" size="large" style={{width:250}}>
                    {value}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.card} style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: 10, color: '#0070f3' }}>{data.winInfo.drwNo}회 당첨 정보</h1>
            <p style={{ marginBottom: 10 }}>추첨일 : {data.winInfo.drwNoDate}</p>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '100%' }}>
                <p
                  className="animate__animated animate__fadeInDown"
                  style={{ color: '#424242', marginBottom: 10 }}
                >
                  <Fab disabled style={{ fontSize: '1.2rem', color: '#0070f3' }}>
                    {data.winInfo.drwtNo1}
                  </Fab>
                  <Fab disabled style={{ fontSize: '1.2rem', color: '#0070f3' }}>
                    {data.winInfo.drwtNo2}
                  </Fab>
                  <Fab disabled style={{ fontSize: '1.2rem', color: '#0070f3' }}>
                    {data.winInfo.drwtNo3}
                  </Fab>
                  <Fab disabled style={{ fontSize: '1.2rem', color: '#0070f3' }}>
                    {data.winInfo.drwtNo4}
                  </Fab>
                  <Fab disabled style={{ fontSize: '1.2rem', color: '#0070f3' }}>
                    {data.winInfo.drwtNo5}
                  </Fab>
                  <Fab disabled style={{ fontSize: '1.2rem', color: '#0070f3' }}>
                    {data.winInfo.drwtNo6}
                  </Fab>
                  +
                  <Fab disabled style={{ fontSize: '1.2rem', color: 'red' }}>
                    {data.winInfo.bnusNo}
                  </Fab>
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    width: 300,
                    textAlign: 'left',
                  }}
                >
                  <p
                    className="animate__animated animate__fadeInDown"
                    style={{ color: '#424242', marginBottom: 10 }}
                  >
                    총 상금 : {data.winInfo.totSellamnt}
                  </p>
                  <p
                    className="animate__animated animate__fadeInDown"
                    style={{ color: '#424242', marginBottom: 10 }}
                  >
                    1등 상금 : {data.winInfo.firstWinamnt}
                  </p>
                  <p
                    className="animate__animated animate__fadeInDown"
                    style={{ color: '#424242', marginBottom: 10 }}
                  >
                    1등 인원 : {data.winInfo.firstPrzwnerCo}명
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Lotto };

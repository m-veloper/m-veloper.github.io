import { getGoogleRss, Googles } from '../../api/google';
import { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import 'animate.css';
import styles from '../../../styles/Home.module.css';
import { CLIENT_SIDE } from '../../config/Constant';

type GoogleProps = {
  google: Googles[];
  env: string;
};

function Google(props: GoogleProps) {
  const [google, setGoogle] = useState(props.google);
  useEffect(() => {
    const tick = setTimeout(async () => {
      const google = await getGoogleRss(CLIENT_SIDE);
      setGoogle(google);
    }, 100000);
    return () => clearTimeout(tick);
  }, [google]);

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h3 style={{ textAlign: 'center', marginBottom: 50 }}>
          검색어를 클릭하면 네이버 뉴스로 이동합니다.
        </h3>
        {google.map((search, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ paddingRight: 30, paddingBottom: 15 }}>
              <p style={{ fontSize: '1.3rem', color: '#5fa5f6', textAlign: 'right' }}>
                {index + 1}
              </p>
            </div>
            <div style={{ width: '100%' }}>
              <a
                className="animate__animated animate__fadeInDown"
                href={search.naverLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#424242' }}
              >
                {search.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.card}>
        <h3 style={{ textAlign: 'center', marginBottom: 50 }}>
          뉴스를 클릭하면 새창에서 볼 수 있습니다.
        </h3>
        {google.map((search, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ paddingRight: 30, paddingBottom: 15 }}>
              <p style={{ fontSize: '1.3rem', color: '#5fa5f6', textAlign: 'right' }}>
                {index + 1}
              </p>
            </div>
            <div style={{ width: '100%' }}>
              <a
                className="animate__animated animate__fadeInDown"
                href={search.newsLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#424242' }}
              >
                {search.newsTitle}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Google };

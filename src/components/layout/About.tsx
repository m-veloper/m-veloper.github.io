import Clock from 'react-live-clock';
import { Meta } from './Meta';
import { GoogleMetaConfig } from '../../config/MetaConfig';
import styles from '../../../styles/Home.module.css';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import * as React from 'react';

const About = ({ data }: any) => {
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
        <p style={{ fontSize: '2.5rem', marginBottom: 0 }}></p>
        <h3>
          <Clock format={'YYYY 년 MM 월 DD 일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
        </h3>
        <div className={styles.grid} style={{ flexDirection: 'column' }}>
          <div className={styles.card} style={{ textAlign: 'center' }}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">{data}</Alert>
            </Stack>
          </div>
        </div>
      </main>
    </div>
  );
};

export { About };

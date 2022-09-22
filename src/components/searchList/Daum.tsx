import styles from '../../../styles/Home.module.css';

const Daum = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>
      현재 <strong style={{ color: '#0070f3' }}>실시간 검색어</strong>
    </h1>

    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Documentation</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h2>Learn</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
    </div>
  </main>
);

export { Daum };

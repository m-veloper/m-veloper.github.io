import styles from '../../../styles/Home.module.css';

const SearchList = () => (
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
);

export { SearchList };

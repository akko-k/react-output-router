import { Navigation } from '../../molecules/Navigation';
import styles from './style.module.css';

export const BaseLayout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.common}>{children}</div>
    </div>
  );
};

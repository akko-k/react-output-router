import styles from './styles.module.css';
import { NavigationLink } from '../../atoms/NavigationLink';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink to="/" label="一覧" />
        <NavigationLink to="/create" label="新規追加" />
      </ul>
    </nav>
  );
};

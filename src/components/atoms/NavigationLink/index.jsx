import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const NavigationLink = ({ to, label }) => {
  return (
    <li className={styles.navItem}>
      <Link className={styles.navLink} to={to}>
        {label}
      </Link>
    </li>
  );
};

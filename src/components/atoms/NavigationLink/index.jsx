import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const NavigationLink = ({ to, label }) => {
  return (
    <li className={styles.navItem}>
      <Link className={styles.navLink} to={to}>
        {label}
      </Link>
    </li>
  );
};

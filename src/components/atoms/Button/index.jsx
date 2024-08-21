import styles from './style.module.css';
export const Button = ({ type, label, onClick }) => {
  return (
    <div>
      <button
        type={type}
        className={styles.button}
        onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

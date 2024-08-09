import styles from './style.module.css';
/**
 * SearchForm component.
 *
 * @component
 * @param {Object} props
 * @returns {JSX.Element} The rendered SearchForm component.
 */
export const SearchForm = (props) => {
  const { placeholder, handleChangeSearchKeyword } = props;
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={handleChangeSearchKeyword}
      />
    </>
  );
};

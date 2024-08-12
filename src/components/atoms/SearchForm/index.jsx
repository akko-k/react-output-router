import styles from './style.module.css';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * SearchForm component.
 *
 * @component
 * @param {Object} props
 * @returns {JSX.Element} The rendered SearchForm component.
 */
export const SearchForm = (props) => {
  const {
    searchKeyword,
    placeholder,
    handleChangeSearchKeyword,
  } = props;
  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        className={styles.searchIcon}
      />
      <input
        className={styles.input}
        type="text"
        value={searchKeyword}
        placeholder={placeholder}
        onChange={handleChangeSearchKeyword}
      />
    </div>
  );
};

// import styles from './style.modules.css';
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
      <h2>検索</h2>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChangeSearchKeyword}
      />
    </>
  );
};

import style from './style.module.css';
export const TextArea = ({
  value,
  disabled = false,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <input
        className={style.text}
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={!onChange}
      />
    </div>
  );
};

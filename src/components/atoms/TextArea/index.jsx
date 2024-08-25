import style from './style.module.css';
export const TextArea = ({
  value,
  disabled = false,
  placeholder,
  onChange,
}) => (
  <textarea
    className={style.text}
    type="text"
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChange}
    readOnly={!onChange}
  />
);

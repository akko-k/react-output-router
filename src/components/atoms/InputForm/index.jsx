import style from './style.module.css';
export const InputForm = ({
  value,
  disabled = false,
  placeholder,
  onChange,
}) => (
  <textarea
    className={style.input}
    type="text"
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChange}
    readOnly={!onChange}
  />
);

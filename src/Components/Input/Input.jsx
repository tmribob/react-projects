import style from "./Input.module.css"

const Input = ({name, value, holder = null, onChange, disabled = false}) => {
    return (
        <input name={name}
               value={value}
               placeholder={holder}
               onChange={onChange}
               disabled={disabled}
               className={style.inputText}/>
    )
}

export default Input
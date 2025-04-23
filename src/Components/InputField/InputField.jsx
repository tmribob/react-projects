import style from "./InputField.module.css"

const InputField = ({name,value, holder, onChange}) => {
    return (
        <input name={name}
               value={value}
               placeholder={holder}
               onChange={onChange}
               className={style.inputText}/>
    )
}

export default InputField
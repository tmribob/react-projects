import style from "./InputField.module.css"

const InputField = ({name,value, holder, onChange,readonly=null}) => {
    return (
        <input name={name}
               value={value}
               placeholder={holder}
               onChange={onChange}
               readOnly={readonly}
               className={style.inputText}/>
    )
}

export default InputField
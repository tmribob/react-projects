import style from "./Button.module.css"

const Button = ({onClick, content, type = "button", disabled = false}) => {
    return (
        <button type={type} disabled={disabled} className={style.button} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
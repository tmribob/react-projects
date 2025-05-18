import style from "./Button.module.css"

const Button = ({onClick, addClass = null, content, type = "button", disabled = false}) => {
    return (
        <button type={type} disabled={disabled} className={`${style.button} ${addClass}`} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
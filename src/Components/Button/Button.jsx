import style from "./Button.module.css"

const Button = ({onClick, content, type = "button", disable = false}) => {
    return (
        <button type={type} disabled={disable} className={style.button} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
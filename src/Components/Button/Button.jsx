import style from "./Button.module.css"

const Button = ({onClick, content,type="button"}) => {
    return (
        <button type={type} className={style.button} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
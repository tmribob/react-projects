import style from "./ButtonConfirm.module.css"

const ButtonConfirm = ({onClick}) => {
    return (
        <button className={style.buttonConfirm}
                onClick={onClick}>
            Confirm
        </button>
    )
}

export default ButtonConfirm
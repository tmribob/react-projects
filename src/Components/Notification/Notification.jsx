import style from "./Notification.module.css"

const Notification = ({context, isVisible}) => {

    return (<div className={`${style.notification} ${isVisible && style.visibility}`}>
        <p className={style.text}>{context}</p>
    </div>)
}

export default Notification;
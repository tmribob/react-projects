import style from "./Notification.module.css"
const Notification = ({context}) => {
    return(<div className={style.notification}>
        <p>{context}</p>
    </div>)
}

export default Notification;
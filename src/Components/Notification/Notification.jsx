import style from "./Notification.module.css"

const Notification = ({context, isVisible}) => {

    return (<div className={`${style.notification} ${isVisible && style.visibility}`}>
        <p>{context}</p>
    </div>)
}

export default Notification;
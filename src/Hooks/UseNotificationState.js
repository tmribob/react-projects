import {useEffect, useState} from "react";

const UseNotificationState = () => {
    const [notification, setNotification] = useState({text: "", isVisible: false});

    useEffect(() => {
        let timer;
        if (notification) {
            timer = setTimeout(() => {
                setNotification(prev => ({...prev, isVisible: false}));
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [notification.isVisible]);

    const showNotification = (content) => {
        setNotification({text:content,isVisible: true});

    }
    return {notification, showNotification}
}
export default UseNotificationState;
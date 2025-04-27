import {useEffect, useState} from "react";

const UseNotificationState = () => {
    const [textNotification, setTextNotification] = useState("");
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        let timer;
        if (isVisible) {
            timer = setTimeout(() => setVisible(false), 3000);
        }
        return () => clearTimeout(timer);
    }, [isVisible]);

    const setNotification = (context) => {
        setTextNotification(() => context)
        setVisible(true)
    }
    return {textNotification,setNotification,isVisible}
}
export default UseNotificationState;
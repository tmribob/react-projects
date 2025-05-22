import style from "./ProgressBar.module.css";

const ProgressBar = ({progress, changeSentence, currentIndex}) => {
    return (<div className={style.progressBar}>
        {progress.map((value, index) => (
            <div key={index}
                 className={`${style.square} ${currentIndex === index ? style.current : ""} ${value === "completed" ? style.completed : ""}`}
                 onClick={() => changeSentence(index)}>{index + 1}</div>
        ))}
    </div>)
}

export default ProgressBar;
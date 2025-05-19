import style from "./ProgressBar.module.css";

const ProgressBar = ({progress}) => {
  return(<div className={style.progressBar}>
      {progress.map((value, index) => {
          if (value === "play") {
              return <div key={index} className={`${style.square} ${style.yellowSquare}`}>{index + 1}</div>
          } else if (value === "completed") {
              return <div key={index} className={`${style.square} ${style.greenSquare}`}>{index + 1}</div>
          } else {
              return <div key={index} className={`${style.square}`}>{index + 1}</div>
          }
      })}
  </div>)
}

export default ProgressBar;
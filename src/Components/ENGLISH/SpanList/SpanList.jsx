import style from "./SpanList.module.css";

const SpanList = ({array}) => {
    return (<div className={style.spanList}>
        {array.map((value) => {
            if (value.color === "green") {
                return <span className={style.isTrue} key={value.key}>{value.word}</span>
            } else if (value.color === "red") {
                return <span className={style.isFalse} key={value.key}>{value.word}</span>
            }
            return <span className={style.span} key={value.key}>{value.word}</span>
        })}
    </div>);
}

export default SpanList;
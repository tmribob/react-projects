import style from "./SpanList.module.css";

const SpanList = ({array, changeButton}) => {
    return (<div className={style.spanList}>
        {array.map((value) => (
            <span key={value.key} onClick={() => changeButton(value.key)} className={() => {
                if (value.color === "green") {
                    return style.isTrue
                } else if (value.color === "red") {
                    return style.isFalse
                }
                return style.span
            }
            }>{value.word}</span>
        ))}
    </div>);
}

export default SpanList;
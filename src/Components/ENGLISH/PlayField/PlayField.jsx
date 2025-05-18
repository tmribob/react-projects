import Button from "../../Button/Button";
import style from './PlayField.module.css'

const PlayField = ({
                       buttons,
                       spans,
                       addWord,
                       delWord,
                       clearSentence,
                       nextSentence
                   }) => {
    return (<div className={style.playField}>
        <div className={style.divButtons}>
            {buttons.map((value, index) => (
                <Button key={index} onClick={() => addWord(index)} content={value}/>))}
        </div>
        <div className={style.divSpans}>
            {spans.map((value, index) => (
                <span key={index} onClick={() => delWord(index)}>{value}</span>))}
        </div>
        <div className={style.divOperations}>
            <Button onClick={clearSentence} content={"Clear"}/>
            <Button onClick={nextSentence} content={"Submit"}/>
        </div>
    </div>);
};

export default PlayField;
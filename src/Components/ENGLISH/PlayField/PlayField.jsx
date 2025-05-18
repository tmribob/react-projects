import Button from "../../Button/Button";
import style from './PlayField.module.css'

const PlayField = ({
                       buttons,
                       spans,
                       changeButton,
                       clearSentence,
                       nextSentence
                   }) => {
    return (<div className={style.playField}>
        <div className={style.divButtons}>
            {buttons.map((value, index) => (
                <Button key={value.key} onClick={() => changeButton(index)} content={value.word}/>))}
        </div>
        <div className={style.divSpans}>
            {spans.map((value) => (
                <span key={value.key}>{value.word}</span>))}
        </div>
        <div className={style.divOperations}>
            <Button onClick={clearSentence} content={"Clear"}/>
            <Button onClick={nextSentence} content={"Submit"}/>
        </div>
    </div>);
};

export default PlayField;
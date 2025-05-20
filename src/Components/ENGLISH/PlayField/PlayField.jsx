import Button from "../../Button/Button";
import style from './PlayField.module.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import ButtonList from "../ButtonList/ButtonList";
import SpanList from "../SpanList/SpanList";

const PlayField = ({
                       buttons,
                       spans,
                       changeButton,
                       clearSentence,
                       nextSentence,
                       progress
                   }) => {
    return (<div className={style.playField}>
        <ProgressBar progress={progress}/>
        <ButtonList array={buttons} changeButton={changeButton}/>
        <SpanList array={spans}/>
        <div className={style.divOperations}>
            <Button onClick={clearSentence} content={"Clear"}/>
            <Button onClick={nextSentence} content={"Submit"}/>
        </div>
    </div>);
};

export default PlayField;
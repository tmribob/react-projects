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
                       progress,
                       goHome,
                       currentIndex,
                       changeSentence
                   }) => {
    return (<div className={style.playField}>
        <ProgressBar progress={progress} changeSentence={changeSentence} currentIndex={currentIndex}/>
        <ButtonList array={buttons.filter((_, index) => index === currentIndex)} changeButton={changeButton}/>
        <SpanList array={spans.filter((_, index) => index === currentIndex)} delSpan={changeButton}/>
        <div className={style.divOperations}>
            <Button onClick={clearSentence} content={"Clear"}/>
            <Button onClick={goHome} content={"Home"}/>
            <Button onClick={nextSentence} content={"Continue"}/>
        </div>
    </div>);
};

export default PlayField;
import style from "./EnglishPage.module.css"
import Button from "../Components/Button/Button";

const EnglishPage = ({
                         text,
                         inputText,
                         changeInputText,
                         splitText,
                         buttons,
                         spans,
                         addWord,
                         delWord,
                         clearSentence,
                         nextSentence
                     }) => {

    return (<>
        {text.length === 0 && <form className={style.formInput}>
            <textarea className={style.inputText} value={inputText} onChange={changeInputText}/>
            <Button onClick={splitText} content={"Submit"}/>
        </form>}
        {text.length !== 0 && <>
            <div>
                {buttons.map((value, index) => (
                    <Button key={index} onClick={() => addWord(index)} content={value}/>))}

            </div>
            <div>
                {spans.map((value, index) => (
                    <span key={index} onClick={() => delWord(index)}>{value}</span>))}
            </div>
            <Button onClick={clearSentence} content={"Clear"}/>
            <Button onClick={nextSentence} content={"Submit"}/>
        </>}
    </>)
}

export default EnglishPage
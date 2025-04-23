import style from "./EnglishPage.module.css"

const EnglishPage = ({text,inputText,changeInputText,splitText,buttons,spans,addWord,delWord,clearSentence,nextSentence}) => {

    return (<>
        {text.length === 0 && <form className={style.formInput}>
            <textarea className={style.inputText} value={inputText} onChange={changeInputText}/>
            <button type={"button"} onClick={splitText}>Submit</button>
        </form>}
        {text.length !== 0 && <>
            <div>
                {buttons.map((value,index) => (
                    <button key={index} onClick={() => addWord(index)}>{value}</button>))}
            </div>
            <div>
                {spans.map((value,index) => (
                    <span key={index} onClick={() => delWord(index)}>{value}</span>))}
            </div>

            <button value={""} onClick={clearSentence}>Clear</button>
            <button onClick={nextSentence}>Submit</button>
        </>}
    </>)
}

export default EnglishPage
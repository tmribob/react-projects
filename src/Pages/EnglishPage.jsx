import StartInputArea from "../Components/ENGLISH/StartInputArea/StartInputArea";
import PlayField from "../Components/ENGLISH/PlayField/PlayField";

const EnglishPage = ({
                         status,
                         inputText,
                         changeInputText,
                         splitText,
                         buttons,
                         spans,
                         changeButton,
                         clearSentence,
                         nextSentence
                     }) => {

    return (<>
        {status === 'start' &&
            <StartInputArea inputText={inputText} changeInputText={changeInputText} splitText={splitText}/>}
        {status === 'playing' &&
            <PlayField buttons={buttons} spans={spans} changeButton={changeButton}  clearSentence={clearSentence}
                       nextSentence={nextSentence}/>}
    </>);
};

export default EnglishPage;
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
                         nextSentence,
                         progress
                     }) => {

    return (<>
        {status === 'start' &&
            <StartInputArea inputText={inputText} changeInputText={changeInputText} splitText={splitText}/>}
        {status === 'playing' &&
            <PlayField buttons={buttons} spans={spans} changeButton={changeButton} clearSentence={clearSentence}
                       nextSentence={nextSentence} progress={progress}/>}
    </>);
};

export default EnglishPage;
import StartInputArea from "../Components/ENGLISH/StartInputArea/StartInputArea";
import PlayField from "../Components/ENGLISH/PlayField/PlayField";

const EnglishPage = ({
                         status,
                         inputText,
                         changeInputText,
                         startGame,
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

    return (<>
        {status === 'start' &&
            <StartInputArea inputText={inputText} changeInputText={changeInputText} startGame={startGame}/>}
        {status === 'playing' &&
            <PlayField buttons={buttons} spans={spans} changeButton={changeButton} clearSentence={clearSentence}
                       nextSentence={nextSentence} progress={progress} goHome={goHome} currentIndex={currentIndex}
                       changeSentence={changeSentence}/>}
    </>);
};

export default EnglishPage;
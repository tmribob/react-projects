import PlayField from "../Components/ENGLISH/PlayField/PlayField";
import TextList from "../Components/ENGLISH/TextList/TextList";
import TextCreator from "../Components/ENGLISH/TextCreator/TextCreator";

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
                         changeSentence,
                         texts,
                         confirmText,
                         inputName,
                         changeInputName,
                         addText,
                         delText
                     }) => {

    return (<>
        {status === 'start' && <TextList texts={texts} startGame={startGame} addText={addText} delText={delText}/>}
        {status === 'adding' &&
            <TextCreator inputText={inputText} inputName={inputName} changeInputName={changeInputName}
                         confirmText={confirmText} changeInputText={changeInputText} goHome={goHome}/>}
        {status === 'playing' &&
            <PlayField buttons={buttons} spans={spans} changeButton={changeButton} clearSentence={clearSentence}
                       nextSentence={nextSentence} progress={progress} goHome={goHome} currentIndex={currentIndex}
                       changeSentence={changeSentence}/>}
    </>);
};

export default EnglishPage;
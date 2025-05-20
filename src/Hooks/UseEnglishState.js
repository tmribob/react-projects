import {useState} from "react";

const UseEnglishState = (showNotification) => {
    const [textEnglish, setTextEnglish] = useState([]);
    const [indexSentence, setIndexSentence] = useState(0);
    const [inputText, setInputText] = useState("");
    const [buttons, setButtons] = useState([]);
    const [spans, setSpans] = useState([]);
    const [status, setStatus] = useState('start');
    const [progress, setProgress] = useState([])

    const splitText = () => {
        if (!inputText.trim()) return;

        const sentences = inputText.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
        const result = sentences.map(sentence => sentence.match(/[а-яА-ЯёЁa-zA-Z0-9]+(?:['`][а-яА-ЯёЁa-zA-Z0-9]+)*/g));
        setButtons(() => mySetButtons(result[0]));
        setTextEnglish(result);
        setIndexSentence(0);
        setStatus('playing');
        setProgress(result.map((_, i) => i === 0 ? "play" : "unplayed"));
    }
    const mySetButtons = (array) => {
        const newArray = [...array];
        return newArray.sort(() => Math.random() - 0.5).map((word, index) => ({word, key: index, isActive: false}));
    }

    const changeSentence = () => {
        if (indexSentence === textEnglish.length - 1) {
            setStatus('start')
        } else {
            setIndexSentence(indexSentence + 1);
            setSpans([]);
            setButtons(mySetButtons(textEnglish[indexSentence + 1]));
            setProgress(progress.map((value, index) => {
                if (value === "play" || value === "completed") {
                    return "completed"
                } else if (index === indexSentence + 1) {
                    return "play"
                }
                return "unplayed"
            }))
        }
    }

    const changeButton = (key) => {
        const currentButton = buttons.find(button => button.key === key);
        if (!currentButton.isActive) {
            setSpans([...spans, {word: currentButton.word, key: currentButton.key}]);
        } else {
            setSpans(spans.filter((span) => span.key !== currentButton.key));
        }
        setButtons(buttons.map((button) => {
            return button.key === key ? {...button, isActive: !button.isActive} : button;
        }));
    }

    const nextSentence = () => {
        const currentSentence = textEnglish[indexSentence];
        if (spans.length === currentSentence.length) {
            if (spans.some((span, index) => span.word !== currentSentence[index])) {
                setSpans(prevSpans => prevSpans.map((value, index) => ({
                        ...value,
                        color: value.word === currentSentence[index] ? "green" : "red"
                    })
                ))
                showNotification(`You made  mistakes`);
            } else {
                changeSentence();
            }
        } else {
            showNotification("Not all the words were chosen ");
        }
    }

    const clearSentence = () => {
        setSpans([]);
        setButtons(() => mySetButtons(textEnglish[indexSentence]));
    }

    const changeInputText = (value) => {
        setInputText(value.target.value);
    }
    return {
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
    }
}

export default UseEnglishState;
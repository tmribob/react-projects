import {useState} from "react";

const UseEnglishState = () => {
    const [textEnglish, setTextEnglish] = useState([]);
    const [indexSentence, setIndexSentence] = useState(0);
    const [inputText, setInputText] = useState("");
    const [buttons, setButtons] = useState([]);
    const [spans, setSpans] = useState([]);
    const [status, setStatus] = useState('start');

    const splitText = () => {
        if (!inputText.trim()) return;

        const sentences = inputText.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
        const result = sentences.map(sentence => sentence.match(/[а-яА-ЯёЁa-zA-Z0-9]+(?:['`][а-яА-ЯёЁa-zA-Z0-9]+)*/g));
        setButtons(() => mySetButtons(result[0]));
        setTextEnglish(result);
        setIndexSentence(0);
        setStatus('playing');
    }
    const mySetButtons = (array) => {
        const newArray = [...array];
        return newArray.sort(() => Math.random() - 0.5).map((word, index) => ({word, key: index, isActive: false}));
    }

    const changeSentence = () => {
        setIndexSentence(indexSentence + 1);
        setSpans([]);
        setButtons(mySetButtons(textEnglish[indexSentence + 1]));
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
        console.log(spans.map(value => value.word));
        console.log(currentSentence);
        if (spans.length === currentSentence.length) {
            for (let i = 0; i < spans.length; i++) {
                if (spans[i].word !== currentSentence[i]) {
                    return;
                }
            }
            changeSentence();
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
        nextSentence
    }
}

export default UseEnglishState;
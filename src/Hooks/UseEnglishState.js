import {useEffect, useState} from "react";
import TextStorage from "../TextStorage";

const UseEnglishState = (showNotification) => {
    const [text, setText] = useState([]);
    const [texts, setTexts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputText, setInputText] = useState("");
    const [inputName, setInputName] = useState("");
    const [buttons, setButtons] = useState([]);
    const [spans, setSpans] = useState([]);
    const [status, setStatus] = useState('start');
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        setTexts(TextStorage.getAll());
    }, []);

    const confirmText = () => {
        if (!inputText.trim()) {
            showNotification("Text is not stated");
            return;
        }
        if (!inputName.trim()) {
            showNotification("Name is not stated");
            return;
        }
        const splitedText = splitText(inputText);
        setStatus("start");
        setTexts(TextStorage.add({text: splitedText, name: inputName}));
    }
    const addText = () => {
        setStatus("adding");
    }

    const delText = (index) => {
        setTexts(TextStorage.remove(index));
    }

    const startGame = (index) => {
        setStatus('playing');
        setCurrentIndex(0);
        const currentText = texts[index].text;
        setButtons(currentText.map(sentence => shuffleArray(sentence).map((word, index) => ({
            word, key: index, isActive: false
        }))));
        setText(currentText);
        setSpans(currentText.map(() => []));
        setProgress(currentText.map(() => "uncompleted"));
    }


    const splitText = (input) => {
        const sentences = input.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
        setInputName("");
        setInputText("");
        return sentences.map(sentence => sentence.match(/[а-яА-ЯёЁa-zA-Z0-9]+(?:['`][а-яА-ЯёЁa-zA-Z0-9]+)*/g));
    }
    const shuffleArray = (array) => {
        const newArray = [...array];
        return newArray.sort(() => Math.random() - 0.5);
    }

    const changeButton = (key) => {
        const currentButton = buttons[currentIndex].find(button => button.key === key);
        setSpans(prevSpan => prevSpan.map((sentence, index) => {
            if (index !== currentIndex) {
                return sentence;
            } else if (currentButton.isActive) {
                return sentence.filter((span) => span.key !== currentButton.key);
            }
            return [...sentence, {word: currentButton.word, key: currentButton.key}];

        }))
        setButtons(prevButton => prevButton.map((sentence, index) => {
            if (index !== currentIndex) {
                return sentence;
            }
            return sentence.map((button) => button.key === key ? {...button, isActive: !button.isActive} : button);
        }));
    }

    const nextSentence = () => {
        const currentSentence = text[currentIndex];
        if (spans[currentIndex].length === currentSentence.length) {
            if (spans[currentIndex].some((span, index) => span.word !== currentSentence[index])) {
                showNotification(`You made mistakes`);
                setSpans(prevSpans => prevSpans.map((sentence, index) => {
                    if (index !== currentIndex) {
                        return sentence;
                    }
                    return sentence.map((value, index) => ({
                        ...value, color: value.word === currentSentence[index] ? "green" : "red"
                    }));
                }));
            } else {
                if (currentIndex === text.length - 1) {
                    setStatus('start');
                } else {
                    setProgress(progress.map((value, index) => index === currentIndex ? "completed" : value));
                    setCurrentIndex(currentIndex + 1);
                }
            }
        } else {
            showNotification("Not all the words were chosen ");
        }
    }

    const changeSentence = (index) => {
        for (let i = index; i < text.length; i++) {
            if (progress[i] === "completed") {
                continue;
            }
            setCurrentIndex(i);
            return;
        }
    }

    const clearSentence = () => {
        setSpans(prevSpan => prevSpan.map((sentence, index) => index === currentIndex ? [] : sentence));
        setButtons(prevButton => prevButton.map((sentence, index) => {
            if (index !== currentIndex) {
                return sentence;
            }
            return sentence.map((button) => ({...button, isActive: false}));
        }));
    }
    const goHome = () => {
        setStatus("start");
    }

    const changeInputText = (value) => {
        setInputText(value.target.value);
    }

    const changeInputName = (value) => {
        const name = value.target.value;
        if (name.length <= 55) {
            setInputName(value.target.value);
        } else {
            showNotification("Name is so long")
        }
    }
    return {
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
        changeSentence,
        currentIndex,
        texts,
        confirmText,
        inputName,
        changeInputName,
        addText,
        delText
    }
}

export default UseEnglishState;
import {useState} from "react";

const UseCalculatorState = () => {
    const [inputCalculate, setInputCalculate] = useState("");
    const buttonsCalculate = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '<X', '0', '=', '+',];

    const changeInput = (element) => {
        if (element === '<X') {
            setInputCalculate((text) => text.slice(0, -1));
        } else if (element === '=') {
            setInputCalculate((text) => String(eval(text)));
        } else {
            setInputCalculate((text) => text + element);
        }
    }

    return {inputCalculate, buttonsCalculate, changeInput};
}

export default UseCalculatorState;
import {useEffect, useState} from "react";
import Button from "../Components/Button/Button";
import useNotificationState from "./UseNotificationState";

const UseCalculatorState = () => {
    const [inputCalculate, setInputCalculate] = useState('0');
    let buttonsCalculate = [];
    const [firstSummand, setFirstSummand] = useState('');
    const [operator, setOperator] = useState('')
    const {setNotification} = useNotificationState();

    const action = (element) => {
        if (inputCalculate === '0') {
            return;
        }
        if (firstSummand !== '') {
            equals(false);
            setOperator(element);
        } else {
            setFirstSummand(() => inputCalculate);
            setOperator(element);
            setInputCalculate('0');
        }
    }

    const addNumber = (digit) => {
        setInputCalculate((text) => {
            if (text === '0') {
                return digit.toString();
            } else {
                return text + digit.toString();
            }
        });
    }
    const back = () => {
        setInputCalculate((text) => {
            if (text.length === 1) {
                return '0';
            } else if (text.length > 1) {
                return text.slice(0, -1);
            }
        })
    }
    const equals = (isButton = true) => {
        if (operator === '' || firstSummand === null) {
            return;
        }
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstSummand) + parseFloat(inputCalculate);
                break;
            case '-':
                result = parseFloat(firstSummand) - parseFloat(inputCalculate);
                break;
            case '*':
                result = parseFloat(firstSummand) * parseFloat(inputCalculate);
                break;
            case '/':
                if (inputCalculate === '0') {
                    setNotification('На ноль делить нельзя');
                    return;
                }
                result = parseFloat(firstSummand) / parseFloat(inputCalculate);
                break;
            default:
                return;
        }
        if (isButton) {
            setInputCalculate(result.toString());
            setOperator('');
            setFirstSummand('');
        } else {
            setFirstSummand(result.toString());
            setInputCalculate('0');
        }
    }
    const createButtons = () => {
        const buttonsActions = ['-', '*', '/'];

        for (let row = 2; row >= 0; row--) {
            for (let column = 1; column < 4; column++) {
                buttonsCalculate.push(<Button key={row * 3 + column}
                                              content={row * 3 + column}
                                              onClick={() => addNumber(row * 3 + column)}/>);
            }
            buttonsCalculate.push(<Button key={buttonsActions[row]}
                                          content={buttonsActions[row]}
                                          onClick={() => action(buttonsActions[row])}/>);
        }
        buttonsCalculate.push(<Button key={'<X'} content={'<X'} onClick={back}/>);
        buttonsCalculate.push(<Button key={0} content={0} onClick={() => addNumber('0')}/>);
        buttonsCalculate.push(<Button key={'='} content={'='} onClick={equals}/>);
        buttonsCalculate.push(<Button key={'+'} content={'+'} onClick={() => action('+')}/>);
    }

    createButtons()

    return {inputCalculate, buttonsCalculate, firstSummand, operator};
}

export default UseCalculatorState;
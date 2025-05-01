import {useState} from "react";
import Button from "../Components/Button/Button";
import { FaDeleteLeft } from "react-icons/fa6";

const UseCalculatorState = (showNotification) => {
    const [textCalculate, setTextCalculate] = useState('0');
    let buttonsCalculate = [];
    const [firstSummand, setFirstSummand] = useState('');
    const [operator, setOperator] = useState('');

    const action = (element) => {
        if (textCalculate === '0') {
            return;
        }
        if (firstSummand !== '') {
            equals(false);
            setOperator(element);
        } else {
            setFirstSummand(() => textCalculate);
            setOperator(element);
            setTextCalculate('0');
        }
    }

    const addNumber = (digit) => {
        setTextCalculate((text) => {
            if (text === '0') {
                return digit.toString();
            } else {
                return text + digit.toString();
            }
        });
    }
    const back = () => {
        setTextCalculate((text) => {
            if (text.length === 1) {
                return '0';
            } else if (text.length > 1) {
                return text.slice(0, -1);
            }
        });
    }
    const equals = (isButton = true) => {
        if (operator === '' || firstSummand === null) {
            return;
        }
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstSummand) + parseFloat(textCalculate);
                break;
            case '-':
                result = parseFloat(firstSummand) - parseFloat(textCalculate);
                break;
            case '*':
                result = parseFloat(firstSummand) * parseFloat(textCalculate);
                break;
            case '/':
                if (textCalculate === '0') {
                    showNotification('На ноль делить нельзя');
                    return;
                }
                result = parseFloat(firstSummand) / parseFloat(textCalculate);
                break;
            default:
                return;
        }
        if (isButton) {
            setTextCalculate(result.toString());
            setOperator('');
            setFirstSummand('');
        } else {
            setFirstSummand(result.toString());
            setTextCalculate('0');
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
        buttonsCalculate.push(<Button key={'<X'} content={<FaDeleteLeft/>} onClick={back}/>);
        buttonsCalculate.push(<Button key={0} content={0} onClick={() => addNumber('0')}/>);
        buttonsCalculate.push(<Button key={'='} content={'='} onClick={equals}/>);
        buttonsCalculate.push(<Button key={'+'} content={'+'} onClick={() => action('+')}/>);
    }

    createButtons();

    return {textCalculate, buttonsCalculate, firstSummand, operator};
}

export default UseCalculatorState;
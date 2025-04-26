import GridField from "../Components/GridField/GridField";
import InputField from "../Components/InputField/InputField";
import {useState} from "react";

const CalculatePage = () => {
    const [inputCalculate, setInputCalculate] = useState("");
    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '<X', '0', '=', '+',]
    const changeInput = (element) => {
        if (element === '<X') {
            setInputCalculate((text) => text.slice(0, -1));
        } else if (element === '=') {
            setInputCalculate((text) => eval(text))
        } else {
            setInputCalculate((text) => text + element);
        }
    }


    return (<div style={{padding: "0 40%"}}>
        <InputField readonly value={inputCalculate}/>
        <GridField buttons={buttons} change={changeInput}/>
    </div>)
}

export default CalculatePage
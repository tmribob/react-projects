import GridField from "../Components/GridField/GridField";
import InputField from "../Components/InputField/InputField";

const CalculatePage = ({input, buttons, text}) => {

    return (<div style={{padding: "0 40%"}}>
        <InputField readonly value={input}/>
        <p>{text}</p>
        <GridField buttons={buttons}/>
    </div>)
}

export default CalculatePage
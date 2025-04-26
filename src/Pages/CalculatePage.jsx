import GridField from "../Components/GridField/GridField";
import InputField from "../Components/InputField/InputField";

const CalculatePage = ({input,buttons,changeInput}) => {

    return (<div style={{padding: "0 40%"}}>
        <InputField readonly value={input}/>
        <GridField buttons={buttons} change={changeInput}/>
    </div>)
}

export default CalculatePage
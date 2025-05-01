import GridButtons from '../GridButtons/GridButtons';
import style from './CalculatorField.module.css';

const CalculatorField = ({intermediacy, buttons, text}) => {
    return (<div className={style.calculator}>
        <span className={style.answer}>{text}</span>
        <p className={style.intermediateValues}>{intermediacy}</p>
        <GridButtons buttons={buttons}/>
    </div>)
}
export default CalculatorField;
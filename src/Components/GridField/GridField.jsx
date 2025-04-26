import style from "./GridField.module.css"
import Button from "../Button/Button";

const GridField = ({change, buttons}) => {

    return (<div className={style.board}>
        {buttons.map((button) => (
            <Button key={button} content={button} onClick={() => change(button)}/>
        ))}

    </div>)
}

export default GridField
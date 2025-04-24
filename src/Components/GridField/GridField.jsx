import style from "./GridField.module.css"
import Button from "../Button/Button";

const GridField = () => {
    const buttons = ["<X", "%", "/", "*",
                     "7", "8", "9", "-",
                     "4", "5", "6", "+",
                     "1", "2", "3", "=",
                     "AC", "0", ".",]
    return (<div className={style.main}>
        {
            buttons.map((button) =>(
                <Button key={button} content={button} />
            ))
        }
    </div>)
}

export default GridField
import style from "./ButtonList.module.css";
import Button from "../../Button/Button";

const ButtonList = ({array, changeButton}) => {
    return (<div className={style.buttonList}>
        {array.map((value) => (
            <Button addClass={value.isActive ? style.isActive : ""}
                    key={value.key}
                    onClick={() => changeButton(value.key)}
                    content={value.word}/>))}
    </div>);
}
export default ButtonList;
import style from "./Text.module.css"
import Button from "../../Button/Button";
import {RiDeleteBin2Line} from "react-icons/ri";

const Text = ({name, startGame, index, delText}) => {
    return (<li className={style.text} onDoubleClick={() => startGame(index)}>
        {name}
        <Button onClick={() => delText(index)} content={<RiDeleteBin2Line/>}/>
    </li>);
}

export default Text;
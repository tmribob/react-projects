import style from "./TextList.module.css";
import Button from "../../Button/Button";
import {RiMenuAddFill} from "react-icons/ri";
import Text from "../Text/Text"

const TextList = ({texts, startGame, addText,delText}) => {
    return (<ul className={style.textList}>
        {texts.map((value, index) => (
            <Text key={index} startGame={startGame} name={value.name} index={index} delText={delText}/>))}
        <Button addClass={style.addText} onClick={addText} content={<RiMenuAddFill/>}/>
    </ul>)
}

export default TextList;
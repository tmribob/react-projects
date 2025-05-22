import style from "./TextCreator.module.css";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

const TextCreator = ({inputText, inputName, changeInputName, changeInputText, confirmText, goHome}) => {
    return (<form className={style.formInput}>
        <Input value={inputName} position={"center"} onChange={changeInputName} holder={"Enter text`s name"}
               width={"40%"} height={"10%"}/>
        <textarea className={style.inputText}
                  value={inputText}
                  onChange={changeInputText}
                  placeholder={"Enter Text"}/>
        <div className={style.operations}>
            <Button onClick={confirmText} content={"Add"}/>
            <Button onClick={goHome} content={"Cancel"}/>
        </div>
    </form>);
}

export default TextCreator;
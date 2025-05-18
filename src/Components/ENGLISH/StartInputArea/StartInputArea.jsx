import style from "./StartInputArea.module.css";
import Button from "../../Button/Button";

const StartInputArea = ({inputText,changeInputText,splitText}) => {
  return(
      <form className={style.formInput}>
          <textarea className={style.inputText} value={inputText} onChange={changeInputText} placeholder={"Enter Text"}/>
          <Button onClick={splitText} content={"Submit"}/>
      </form>
  );
};

export default StartInputArea;
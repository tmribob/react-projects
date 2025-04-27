import style from "./GridField.module.css"

const GridField = ({buttons}) => {

    return (<div className={style.board}>
        {buttons.map((button) => button)}

    </div>)
}

export default GridField
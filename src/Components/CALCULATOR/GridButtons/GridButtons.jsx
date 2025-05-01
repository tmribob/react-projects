import style from "./GridButtons.module.css"

const GridButtons = ({buttons}) => {

    return (<div className={style.board}>
        {buttons.map((button) => button)}

    </div>)
}

export default GridButtons
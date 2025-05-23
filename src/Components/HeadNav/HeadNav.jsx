import {NavLink} from "react-router-dom";
import style from "./HeadNav.module.css"

const HeadNav = ({refs}) => {
    return (<nav className={style.navigator}>
        {refs.map((ref) => (
            <NavLink to={"/" + ref} key={ref} className={style.link}>{ref.toUpperCase()}</NavLink>
        ))}
    </nav>)
}
export default HeadNav
import {NavLink} from "react-router-dom";
import style from "./HeadNav.module.css"

const HeadNav = () => {
    const refs = ["posts", "pokemon", "english", "calculator"]
    return (<nav className={style.navigator}>
        {
            refs.map((ref) => (
                <NavLink to={"/" + ref} className={style.link}>{ref.toUpperCase()}</NavLink>
            ))
        }

    </nav>)
}
export default HeadNav
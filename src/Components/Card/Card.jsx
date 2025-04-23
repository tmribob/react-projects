import style from "./Card.module.css"

const Card = ({title, body, delPost, id}) => {
    return (
        <div className={style.card}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => {delPost(id)}}>X</button>
        </div>
    );
};

export default Card;
import { Link } from "react-router-dom";

import "./DisplayRocket.css";

const DisplayRocket = ({ id, name, desc, bgImage }) => {
    return (
        <article
            className="rocket"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <h2 className="rocket__name">{name}</h2>
            <div className="rocket__desc">{desc}</div>
            <Link to={`/rockets/${id}`}>
                <div className="rocket__button">VIEW INFO</div>
            </Link>
        </article>
    );
};

export default DisplayRocket;

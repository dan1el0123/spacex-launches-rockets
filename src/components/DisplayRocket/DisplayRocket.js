import "./DisplayRocket.css";

const DisplayRocket = ({ name, desc, bgImage }) => {
    return (
        <article
            className="rocket"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <h2 className="rocket__name">{name}</h2>
            <div className="rocket__desc">{desc}</div>
            <div className="rocket__button">VIEW INFO</div>
        </article>
    );
};

export default DisplayRocket;

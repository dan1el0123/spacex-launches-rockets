import "./Comment.css";

const Comment = () => {
    return (
        <article className="comment">
            <div className="comment__date">24/11/2020 14:41:42</div>
            <div className="comment__message">
                Falcon Heavy is composed of three Falcon 9 nine-engine cores
                whose 27 Merlin engines together generate more than 5 million
                pounds of thrust at liftoff, equal to approximately eighteen 747
                aircraft.
            </div>
        </article>
    );
};

export default Comment;

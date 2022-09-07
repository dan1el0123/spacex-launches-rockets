import "./Comment.css";

const Comment = ({ date, message }) => {
    return (
        <article className="comment">
            <div className="comment__date">{date}</div>
            <div className="comment__message">{message}</div>
        </article>
    );
};

export default Comment;

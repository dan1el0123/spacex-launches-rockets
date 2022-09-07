import { useState } from "react";

import Comment from "../Comment/Comment";
import "./Sidebar.css";

const Sidebar = () => {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleNewComment = (e) => {
        if (!newComment) return;
        const id = comments.length ? comments[comments.length - 1].id + 1 : 1;
        const date = new Date().toLocaleString();
        const commentObj = {
            id,
            date,
            message: newComment,
        };
        setComments((prev) => [...prev, commentObj]);
        setNewComment("");
    };

    return (
        <div className="sidebar">
            <form
                className="sidebar__form"
                onSubmit={(e) => e.preventDefault()}
            >
                <h3>Leave a comment</h3>
                <label htmlFor="sidebar__textarea">Enter your comment:</label>
                <textarea
                    id="sidebar__textarea"
                    className="sidebar__textarea"
                    placeholder="Enter your comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    type="submit"
                    className="sidebar__button"
                    onClick={handleNewComment}
                >
                    Send
                </button>
            </form>

            {comments.length ? (
                comments.map((comment) => (
                    <Comment date={comment.date} message={comment.message} />
                ))
            ) : (
                <div className="sidebar__empty">No comments to display.</div>
            )}
        </div>
    );
};

export default Sidebar;

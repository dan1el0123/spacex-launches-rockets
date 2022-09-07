import { useState } from "react";

import Comment from "../Comment/Comment";
import "./Sidebar.css";

const Sidebar = () => {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

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
                <button type="submit" className="sidebar__button">
                    Send
                </button>
            </form>

            {comments.length ? (
                comments.map(() => <Comment />)
            ) : (
                <div className="sidebar__empty">No comments to display.</div>
            )}
        </div>
    );
};

export default Sidebar;

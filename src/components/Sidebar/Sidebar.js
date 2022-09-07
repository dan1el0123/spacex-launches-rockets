import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Comment from "../Comment/Comment";
import "./Sidebar.css";

const Sidebar = ({ rocketId }) => {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleNewComment = async (e) => {
        if (!newComment) return;
        try {
            const docRef = await addDoc(collection(db, "comments"), {
                rocketId,
                message: newComment,
                date: new Date().toLocaleString(),
            });
            console.log(docRef);
            setNewComment("");
        } catch (err) {
            console.log(err);
        }
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

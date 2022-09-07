import { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import Comment from "../Comment/Comment";
import "./Sidebar.css";

const Sidebar = ({ rocketId }) => {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // LISTEN REAL TIME
        const unsub = onSnapshot(
            collection(db, "comments"),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                list = list.filter((comment) => comment.rocketId === rocketId);
                setComments(list);
            },
            (error) => {
                console.log(error);
            }
        );
        // unsubscribe on unmount
        return () => {
            unsub();
        };
    }, [rocketId]);

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
                    <Comment
                        key={comment.id}
                        date={comment.date}
                        message={comment.message}
                    />
                ))
            ) : (
                <div className="sidebar__empty">No comments to display.</div>
            )}
        </div>
    );
};

export default Sidebar;

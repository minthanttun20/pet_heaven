import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase'; 
import { addDoc, collection} from 'firebase/firestore';

import { ImCross } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';


const ReviewForm = () => {
    const [user, setUser] = useState(null);

    const [newReview, setNewReview] = useState({comment: ''});

    const navigate = useNavigate()


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async(user) => {
            if (user) {
                console.log("User Data:", user);
                setUser(user);
            }
        });
        console.log("User not found");
        return () => unsubscribe();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prevState => ({ ...prevState, [name]: value }));
    };

    const submitReview = async (e) => {
        e.preventDefault();
        if (!user) return alert("Please log in to submit a review.");

        const reviewData = {
            author: user.displayName,
            date: new Date().toISOString(),
            comment: newReview.comment,
            userId: user.uid
        };

        try {
            await addDoc(collection(db, 'reviews'), reviewData);
            setNewReview({ comment: '' }); // Reset form
            navigate('/review')
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    return (
        <div className="reviewPage">         
           <Link to='/review' className='reviewPage-close'><ImCross /></Link>
            <section className="reviewForm">
                {user ? (
                    <form onSubmit={submitReview}>
                        <label>
                            Comment:
                            <textarea
                                name="comment"
                                value={newReview.comment}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </label>
                        <button type="submit">Submit Review</button>
                    </form>
                ) : (
                    <p>Please log in to leave a review.</p>
                )}
            </section>
        </div>
    );
}

export default ReviewForm
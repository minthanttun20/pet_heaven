import React, { useState, useEffect } from 'react'
import { db } from '../firebase'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import Loading from './Loading'
import { Link } from 'react-router-dom';


const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)

    // Fetch reviews from Firestore
    useEffect(() => {
        const fetchReviews = async () => {
            const q = query(collection(db, 'reviews'), orderBy('date', 'desc'));
            const querySnapshot = await getDocs(q);
            setReviews(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        };

        fetchReviews();
    }, []);

    if(loading) {
      return <Loading/>
    }

  return (
    <div className='reviews'>
      <h1>Reviews From Happy Adopters</h1>
      <Link to='/reviewForm' className='writeReview'>Write Review</Link>
      <section className="reviewsList">
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id} className="review">
              <h3>{review.author}</h3>
              <p className='review-date'><em>{new Date(review.date).toLocaleDateString()}</em></p>
              <p>{review.comment}</p>
          </div>
      ))
      ) : (
          <p>No reviews</p>
      )}
    </section>
    </div>
  )
}

export default Review
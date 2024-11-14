import React, { useEffect, useState } from 'react';
import '../App.css';
import api from '../api';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await api.get('/');
      setReviews(response.data);
    };
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    setReviews(reviews.filter((review) => review._id !== id));
  };

  return (
    <div>
      {reviews.map((review) => (
        <div key={review._id}>
          <h2>{review.bookTitle}</h2>
          <p><strong>Author:</strong> {review.author}</p>
          <p><strong>Review:</strong> {review.reviewContent}</p>
          <p><strong>Reviewer:</strong> {review.reviewerName}</p>
          <button onClick={() => handleDelete(review._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;

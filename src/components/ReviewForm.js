import React, { useState } from 'react';
import '../App.css';

import api from '../api';

const ReviewForm = ({ onReviewAdded }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [reviewerName, setReviewerName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { bookTitle, author, reviewContent, reviewerName };
    const response = await api.post('/', newReview);
    onReviewAdded(response.data);
    setBookTitle('');
    setAuthor('');
    setReviewContent('');
    setReviewerName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} placeholder="Book Title" required />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <textarea value={reviewContent} onChange={(e) => setReviewContent(e.target.value)} placeholder="Review Content" required />
      <input value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} placeholder="Reviewer Name" required />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

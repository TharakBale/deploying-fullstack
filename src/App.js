import React, { useState } from 'react';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import './App.css';


function App() {
  const [refresh, setRefresh] = useState(false);

  const handleReviewAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>Book Review App</h1>
      <ReviewForm onReviewAdded={handleReviewAdded} />
      <ReviewList key={refresh} />
    </div>
  );
}

export default App;

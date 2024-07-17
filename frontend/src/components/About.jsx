import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReviewCard from "./ReviewCard";

const About = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("https://event-management-website-backendurl.onrender.com/api/v1/review");
      setReviews(res.data.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
      toast.error("Failed to fetch reviews");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSendReview = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://event-management-website-backendurl.onrender.com/api/v1/review",
        { name, message: review },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);
      setName("");
      setReview("");
      fetchReviews(); // Refresh the list of reviews
    } catch (error) {
      console.error("Error sending review:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="about container">
      <h2>ABOUT</h2>
      <div className="review-section">
        <div className="banner">
          <h2>Write a Review</h2>
          <form onSubmit={handleSendReview}>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                rows={5}
                placeholder="Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button type="submit" className="send-button">Post</button>
          </form>
        </div>
      </div>
      <div className="reviews">
        <h2>Our Customer Reviews</h2>
        <div className="review">
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <ReviewCard key={index} name={rev.name} message={rev.message} />
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
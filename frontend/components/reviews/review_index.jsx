import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.reviews) return null;
    const mappedReviews = this.props.reviews.map((review, idx) => {
      return <ReviewIndexItem key={idx} review={review} />;
    });
    return (
      <div className="reviews-container-wrapper">
        <h2 className="customer-review-title">Customer Reviews</h2>
        <div>{mappedReviews}</div>
      </div>
    );
  }
}

export default ReviewIndex;

import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.product.id);
  }

  render() {
    if (!this.props.reviews) return null;
    console.log(this.props.reviews);
    const mappedReviews = this.props.reviews.map((review, idx) => {
      return <ReviewIndexItem key={idx} review={review} />;
    });
    return <div>{mappedReviews}</div>;
  }
}

export default ReviewIndex;

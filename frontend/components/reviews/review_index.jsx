import React from "react";
import ReviewIndexItem from "./review_index_item";
import CreateViewFormContainer from "./create_review_form_container";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.reviews) return null;
    const mappedReviews = this.props.reviews.reverse().map((review, idx) => {
      return (
        <ReviewIndexItem
          key={idx}
          review={review}
          deleteReview={this.props.deleteReview}
          productId={this.props.product.id}
          currentUserId={this.props.currentUserId}
        />
      );
    });
    return (
      <div className="reviews-container-wrapper">
        <div className="create-form-wrapper">
          {this.props.currentUserId && (
            <div>
              <h2 className="customer-review-title">Create a review</h2>
              <CreateViewFormContainer product={this.props.product} />
            </div>
          )}
        </div>
        <h2 className="customer-review-title">
          Top reviews from the United States
        </h2>
        <div className="reviews">{mappedReviews}</div>
      </div>
    );
  }
}

export default ReviewIndex;

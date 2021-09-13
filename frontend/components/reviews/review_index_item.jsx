import React from "react";
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
  render() {
    const { review } = this.props;
    return (
      <div>
        {/* name of reviewer */}
        <div>{review.username}</div>
        <div className="review-body">
          <div>{review.body}</div>
        </div>
        <div className="review-rating">
          <div>{review.rating}</div>
        </div>

        {/* <button>
          <Link to={`/reviews/${review.id}/edit`}>Edit</Link>
        </button> */}
      </div>
    );
  }
}

export default ReviewIndexItem;

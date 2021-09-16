import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
class ReviewIndexItem extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review, this.props.productId);
  }

  render() {
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      10: "October",
      11: "November",
      12: "December",
    };
    const reviewStars = [];
    const { review } = this.props;

    if (!review) return null;
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
        reviewStars.push(<StarIcon key={i} className="show-stars" />);
      } else {
        reviewStars.push(<StarBorderIcon key={i} className="show-stars" />);
      }
    }
    const splitDate = review.createdAt.split("-");
    const date = [
      months[splitDate[1]],
      splitDate[2].slice(0, 2) + ",",
      splitDate[0],
    ].join(" ");

    const deleteButton =
      review.reviewerId !== this.props.currentUserId ? null : (
        <div className="delete-review">
          <button
            onClick={(e) => this.handleDelete(e)}
            className="delete-review-button">
            Delete
          </button>
        </div>
      );

    return (
      <div className="whole-review-wrapper">
        <div className="review-user-details">
          <img src={window.reviewpropic} />
          <div>{review.username}</div>
        </div>
        <div className="rating-body-wrapper">
          <div className="review-rating">{reviewStars}</div>
          <div className="review-title">{review.title}</div>
        </div>
        <div className="review-date-wrapper">
          <div className="review-date">
            Reviewed in the United States at {date}
          </div>
          <div className="verified-purchase">
            <div>Verified Purchase</div>
            <div className="delete-button">{deleteButton}</div>
          </div>
        </div>
        <div className="review-body">
          <div>{review.body}</div>
        </div>
        <div className="review-date">
          {Math.ceil(Math.random() * 1000)} people found this helpful
        </div>
        <hr />
      </div>
    );
  }
}

export default ReviewIndexItem;

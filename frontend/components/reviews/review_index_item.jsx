import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
class ReviewIndexItem extends React.Component {
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

    return (
      <div className="whole-review-wrapper">
        <div className="review-user-details">
          <img src={window.reviewpropic} />
          <div>{review.username}</div>
        </div>
        <div className="rating-body-wrapper">
          <div className="review-rating">
            <div>{reviewStars}</div>
          </div>
          <div className="review-title">
            <div>{review.title}</div>
          </div>
        </div>
        <div>
          <div className="review-date">
            Reviewed in the United States at {date}
          </div>
        </div>
        <div className="review-body">
          <div>{review.body}</div>
        </div>

        {/* <button>
          <Link to={`/reviews/${review.id}/edit`}>Edit</Link>
        </button> */}
      </div>
    );
  }
}

export default ReviewIndexItem;

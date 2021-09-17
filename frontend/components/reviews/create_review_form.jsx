import React from "react";
import { Redirect } from "react-router";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      rating: 5,
      reviewer_id: this.props.currentUserId,
      product_id: this.props.product.id,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state, this.props.product.id);
  }

  handleChange(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    const starRatings = (
      <div>
        {[1, 2, 3, 4, 5].map((num, i) => {
          const actualNum = i + 1;
          const showStar =
            actualNum <= this.state.rating ? (
              <StarIcon className="show-stars" />
            ) : (
              <StarBorderIcon className="show-stars" />
            );
          return (
            <label>
              <input
                type="radio"
                name="rating"
                className="star-rating-radio-input"
                value={actualNum}
                onClick={() => this.setState({ rating: actualNum })}
              />
              {showStar}
            </label>
          );
        })}
      </div>
    );

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="review-form">
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <label>Rating</label>
          <div>{starRatings}</div>
          <label>Description</label>
          <textarea
            // cols="66"
            // rows="10"
            value={this.state.body}
            onChange={this.handleChange("body")}
          />
          <button>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default CreateReviewForm;

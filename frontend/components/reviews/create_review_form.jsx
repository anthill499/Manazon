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
    // https://w3collective.com/react-star-rating-component/
    // https://reactjs.org/docs/hooks-state.html
    const starRatings = (
      <div>
        {[1, 2, 3, 4, 5].map((num, i) => {
          const actualNum = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                className="star-rating-radio-input"
                value={actualNum}
                onClick={() => this.setState({ rating: actualNum })}
              />
              <StarIcon
                className="star"
                style={{
                  color: actualNum <= this.state.rating ? "black" : "grey",
                }}
                fontSize="small"
              />
            </label>
          );
        })}
      </div>
    );

    return (
      <div className="review-form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <div>{starRatings}</div>
          <label>Review</label>
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.handleChange("body")}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateReviewForm;

import React from "react";
import { Redirect } from "react-router";
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
    return (
      <div className="review-form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <label>Rating</label>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.handleChange("rating")}
          />
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

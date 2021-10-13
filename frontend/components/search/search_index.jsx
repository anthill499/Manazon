import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../util/product_util";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  showStars(ele) {
    const reviewStars = [];
    const { review } = ele;
    if (!review) return null;
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
        reviewStars.push(<StarIcon key={i} className="show-stars" />);
      } else {
        reviewStars.push(<StarBorderIcon key={i} className="show-stars" />);
      }
    }
    return reviewStars;
  }

  render() {
    const { products } = this.props;

    const mappedSearchedProducts = !products ? (
      <div>No products found</div>
    ) : (
      products.map((ele, i) => {
        return (
          <div key={i} className="search-flex-container">
            <div>
              <Link
                to={`/products/${ele.id}`}
                target="_blank"
                rel="noopener noreferrer">
                <img src={ele.photoUrl} className="search-product-img" />
              </Link>
            </div>
            <div className="search-product-details">
              <div className="search-product-title">
                <Link
                  to={`/products/${ele.id}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {ele.title}
                </Link>
              </div>
              <div className="search-product-price">${ele.price}</div>
              <div>{ele.rating}</div>
            </div>
          </div>
        );
      })
    );
    return (
      <div className="search-wrapper">
        {products.length !== 0 && (
          <div className="search-counter">
            1 out of 1 in {products.length} results
          </div>
        )}
        <div className="search-container">{mappedSearchedProducts}</div>
      </div>
    );
  }
}

export default SearchIndex;

import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import { createCartItem } from "../../actions/cart_items_actions";
// hello
class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts(this.props.query);
  }

  showStars(rating) {
    const reviewStars = [];
    if (!rating) return null;
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        reviewStars.push(<StarIcon key={i} className="show-stars" />);
      } else {
        reviewStars.push(<StarBorderIcon key={i} className="show-stars" />);
      }
    }
    return reviewStars;
  }

  render() {
    const { products } = this.props;
    const mappedSearchedProducts = !products.length ? (
      <div>No products found</div>
    ) : (
      products.map((ele, i) => {
        return (
          <div key={i} className="search-flex-container">
            <div className="search-pic-n-text">
              <div>
                <Link to={`/products/${ele.id}`}>
                  <img src={ele.photoUrl} className="search-product-img" />
                </Link>
              </div>
              <div className="search-product-details">
                <div className="search-product-title">
                  <Link to={`/products/${ele.id}`}>{ele.title}</Link>
                </div>
                <div>{this.showStars(ele.rating)}</div>
                <div className="search-product-price">${ele.price}</div>
                <div className="search-prime-and-delivery">
                  <div>
                    <img src={window.primelogo} className="search-prime" />
                  </div>
                  <div>FREE One-Day</div>
                </div>
              </div>
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

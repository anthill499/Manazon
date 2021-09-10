import React from "react";
import ProductIndexItem from "./product_index_items";
import ProductImports from "./product_imports";
class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const mappedProducts = !this.props.allProducts
      ? null
      : this.props.allProducts.map((product, idx) => {
          return <ProductIndexItem product={product} key={idx} />;
        });
    return (
      <>
        <div>
          <div>{mappedProducts}</div>
          <ProductImports />
        </div>
        <footer id="footer">
          <div className="back-to-top">
            <p>Back to top</p>
          </div>
          <div className="extra-links">
            <div>
              <h2>Get to know Us</h2>
              <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Manazon</li>
                <li>Press Center</li>
                <li>Investor Relations</li>
                <li>Manazon Devices</li>
              </ul>
            </div>
            <div>
              <h2>Make money with us</h2>
              <ul>
                <li>Sell products on Amazon</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate </li>
                <li>Become a Delivery Driver </li>
                <li>Start a package delivery business</li>
              </ul>
            </div>

            <div>
              <h2>Let Us Help You</h2>
              <ul>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates {"&"} Policies</li>
                <li>Amazon Prime</li>
              </ul>
            </div>

            <div>
              <h2>Technologies Used</h2>
              <ul>
                <li>Ruby on Rails</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className="extra-links-two">
            <ul>
              <li>Conditions of Use</li>
              <li>Privary Notice</li>
              <li>Interest-Based Ads©</li>
              <li>2021, Manazon.heroku.app, Inc. or its affiliates</li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default ProductIndex;

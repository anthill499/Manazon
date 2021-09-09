import React from "react";
import NavBar from "../nav_bar/nav_bar";
import ProductIndexItem from "./product_index_items";
import NavBarCategories from "../nav_bar/nav_bar_categories";
import ProductImports from "./product_imports";
import NavBarModalContainer from "../nav_bar/nav_modal_container";
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
          <header id="nav">
            <NavBar />
          </header>
          <div>
            <NavBarCategories />
          </div>
          <div>
            <ProductImports />
          </div>
          {/* <div className="mapped-products-index">{mappedProducts}</div> */}
        </div>
        <footer id="footer">
          <div className="back-to-top">
            <p>Back to top</p>
          </div>
          <div className="extra-links">
            <div>
              <h3>Get to know us!</h3>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ul>
            </div>
            <div>
              <h3>Make money with us</h3>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ul>
            </div>
            <div>
              <h3>Manazon Payment Products</h3>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ul>
            </div>
            <div>
              <h3>Let us help you</h3>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ul>
            </div>
          </div>
          <div className="extra-links-two"> pls work </div>
        </footer>
      </>
    );
  }
}

export default ProductIndex;

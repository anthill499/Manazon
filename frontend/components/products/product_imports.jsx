import React from "react";

class ProductImports extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div id="import-div">
        <div id="index-title">
          <h1>"Alexa, show me the gains"</h1>
          <h1>Blink Indoor</h1>
        </div>
        <div className="product-showings-group">
          <div className="product-group">
            <h1>Customer's Most-Loved</h1>
            <div className="four-pics-group">
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 1</p>
              </div>
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 2</p>
              </div>
            </div>
            <div className="four-pics-group">
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 3</p>
              </div>
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 4</p>
              </div>
            </div>
          </div>
          <div className="product-group">
            <h1>Back to School fashion</h1>
            <div className="four-pics-group">
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 5</p>
              </div>
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 6</p>
              </div>
            </div>
            <div className="four-pics-group">
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 7</p>
              </div>
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 8</p>
              </div>
            </div>
          </div>
          <div className="product-group">
            <h1>Stock up for college</h1>
            <div className="four-pics-group">
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 9</p>
              </div>
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 10</p>
              </div>
            </div>
            <div className="four-pics-group">
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 11</p>
              </div>
              <div>
                <img src={window.dumbbells} className="dumbbells" />
                <p>Dumbbell 12</p>
              </div>
            </div>
          </div>
        </div>
        <img src={window.bg} className="background-img" />
        <div id="swipers">
          <img
            src={window.swipeIcons}
            className="swipe-icons"
            id="swipe-left"
          />
          <img
            src={window.swipeIcons}
            className="swipe-icons"
            id="swipe-right"
          />
        </div>
      </div>
    );
  }
}

export default ProductImports;

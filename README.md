# README

# Manazon

Manazon is a global e-commerce website that sells gym equipment, clothes and other fitness related items. Similar to its clone/counterpart, users should be able to log-in/log-out, see a list of items and then add items to a shopping cart.

[video](https://user-images.githubusercontent.com/79227636/133843818-ef35ddf2-2c97-4acc-a0d8-789f95a52861.mp4)

# [Live Site](https://manazon.herokuapp.com/#/)

# Product, Shopping Cart, and Reviews

- A user should be able to click on a product on the homepage and take the user to the specific product listing
- A logged-in user should be able to add/remove an item to and from his/her shopping cart
- Reviews for a specific product should appear under its product listing on the show page
- A logged-in user should be able to change the quantity of items in his/her cart

<img width="1440" alt="Screen Shot 2021-09-17 at 1 12 43 PM" src="https://user-images.githubusercontent.com/79227636/133828173-8fa471d5-4d62-4743-adcd-cf2e44e3f6fd.png">

<img width="1440" alt="Screen Shot 2021-09-17 at 1 13 12 PM" src="https://user-images.githubusercontent.com/79227636/133828323-e966a0db-ac03-4875-8d9c-498ba7c272dd.png">

# Code challenges

1. ## Updating the cart quantity in add to cart feature

```javascript
addToCart(e) {
    const { product, currentUserId, allCarts } = this.props;
    e.preventDefault();
    if (!currentUserId) {
      this.props.history.push("/login");
    }
    const cartItem = {
      productQuantity: parseFloat(this.state.cartQuantity),
      productId: product.id,
      shopperId: currentUserId,
    };

    let currentCartId;
    allCarts.forEach((cartItem) => {
      if (cartItem.productId === product.id) {
        currentCartId = cartItem.id;
      }
    });

    const placeholder = allCarts.filter(
      (cartItem) => cartItem.id === currentCartId
    );

    const currentQuantity =
      placeholder.length > 0 ? placeholder[0].productQuantity : 0;
    const updatedCartItem = {
      productQuantity:
        parseFloat(this.state.cartQuantity) + parseFloat(currentQuantity),
      productId: product.id,
      shopperId: currentUserId,
      id: currentCartId,
    };
    if (this.checkCartContent()) {
      this.props
        .updateCartItem(updatedCartItem)
        .then(() => this.props.history.push("/cart_items"));
    } else {
      this.props
        .createCartItem(cartItem)
        .then(() => this.props.history.push("/cart_items"));
    }
  }
```

- Solved by using a placeholder constant to store the reference
- Accounted for if the item is already in the cart or not using the appropriate the ajax request
- Fixed it by passing the necessary props down to child components and consistently looking at thunk logger to see if any variables are undefined

2. ## Potential frontend filtering for search feature

- will implement in the feature

```javascript
  handleSearch() {
    const searchResults = [];
    const keywords = this.state.query.toLowerCase().split(" ");
    keywords.forEach((word) => {
      this.props.ProductIndex.forEach((product) => {
        if (product.title.toLowerCase().indexOf(word) !== -1)
          searchResults.push(product);
      });
    });
    {
    }
    this.setState({ searchArray: searchResults });
  }
```

# Technologies used

- Ruby
- Rails
- Node
- PostgreSQL
- HTML, CSS, Javascript

# Future Plans

- Finish debugging the update feature for cart items
- Update reviews feature
- Search feature
- Finish CSS for entire site

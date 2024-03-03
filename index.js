// Helper function to add an item to the shopping cart
function addItemToCart(cart, item) {
    cart.push(item);
  }
  
  // Helper function to calculate the total price of items in the cart
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
  
    for (const item of cart) {
      totalPrice += item.price;
    }
  
    return totalPrice.toFixed(2); // Keep the total price to two decimal places
  }
  
  // Helper function to display the items in the shopping cart
  function displayShoppingCart(cart) {
    console.log("Shopping Cart:");
  
    if (cart.length === 0) {
      console.log("Your cart is empty.");
    } else {
      cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
      });
  
      const totalPrice = calculateTotalPrice(cart);
      console.log(`Total Price: $${totalPrice}`);
    }
  }
  
  // Main function to use the helper functions
  function shoppingCartApp() {
    const cart = [];
  
    const item1 = { name: "T-shirt", price: 19.99 };
    const item2 = { name: "Jeans", price: 39.99 };
    const item3 = { name: "Sneakers", price: 49.99 };
  
    addItemToCart(cart, item1);
    addItemToCart(cart, item2);
    addItemToCart(cart, item3);
  
    displayShoppingCart(cart);
  }
  
  // Run the shopping cart application
  shoppingCartApp();
const preparePayPalData = (products, totalAmount) => {
    // If no products are passed, return an empty object to avoid errors
    if (!products || products.length === 0 || !totalAmount) {
      console.error("Invalid products or totalAmount", products, totalAmount);
      return {
        items: [],
        total: "0.00", // Default value if there's no total
        itemTotal: "0.00", // Default value if no items are available
      };
    }
  
    const paypalItems = products.map(item => {
      // Validate and assign required fields for PayPal
      const itemName = item.product?.title || "Unknown Item"; // Fallback for missing name
      const unitPrice = item.selectedVariant?.price || 0; // Fallback for missing price
      return {
        name: itemName,
        quantity: item.quantity || 1,
        unit_amount: {
          currency_code: "USD", // Adjust currency code as needed
          value: unitPrice.toFixed(2),
        },
        description: item.product?.description || "No description available", // Fallback
      };
    });
  
    // Calculate item_total based on the products
    const itemTotal = products
      .reduce((acc, item) => acc + (item.quantity * (item.selectedVariant?.price || 0)), 0)
      .toFixed(2);
  
    return {
      items: paypalItems,
      paypalTotal: parseFloat(totalAmount).toFixed(2), // Ensure total is a valid number
    itemTotal: itemTotal, // For validation
    };
  };
    export default preparePayPalData
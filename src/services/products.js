async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=3');
    
    if (response.ok) {
      const data = await response.json();
      
      return data.products;
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Export the products service function
export { getProducts };
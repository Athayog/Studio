// store.js
import create from 'zustand';

const useShopifyStore = create((set) => ({
  checkoutId: null,
  cartItems: [],
  products: [],
  setCheckoutId: (id) => set((state) => ({ checkoutId: id })),
  setCartItems: (items) => set((state) => ({ cartItems: items })),
  setProducts: (products) => set((state) => ({ products: products })),
  initializeShopifyData: async () => {
    try {
      // Check if checkoutId is stored in localStorage
      let storedCheckoutId = localStorage.getItem('checkoutId');

      if (!storedCheckoutId) {
        // If checkoutId doesn't exist in localStorage, fetch or create a new one
        const newCheckoutId = await fetchOrCreateCheckout(); // Adjust the function as needed

        // Ensure that newCheckoutId is a string before storing
        storedCheckoutId = String(newCheckoutId);

        // Store checkoutId in localStorage
        localStorage.setItem('checkoutId', storedCheckoutId);
      }

      // Update the state with the retrieved or created checkoutId
      set((state) => ({ checkoutId: storedCheckoutId }));

      // Fetch cart items
      const items = await fetchCartItems(storedCheckoutId); // Adjust the function as needed
      set((state) => ({ cartItems: items }));

      // Fetch products (assuming you have a fetchProducts function)
      const productList = await fetchProducts(); // Adjust the function as needed
      set((state) => ({ products: productList }));
    } catch (error) {
      console.error('Error initializing Shopify data:', error);
    }
  },
}));

export default useShopifyStore;

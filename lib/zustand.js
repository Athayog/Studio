import { create } from 'zustand'

const useCartStore = create((set) => ({
    checkoutID: null,
    addCheckoutID: (checkoutID) => set((state) => ({ checkoutID: checkoutID })),
    
}))

export default useCartStore
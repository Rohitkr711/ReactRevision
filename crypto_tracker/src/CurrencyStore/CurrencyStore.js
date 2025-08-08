import { create } from 'zustand'

export const CurrencyStore = create((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => {
        // console.log('Set function',set);
        
        return set((state) => ({
        ...state,
        currency: newCurrency
    }))}
}))

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  nome: string
  preco: number
  quantidade: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        existing.quantidade += action.payload.quantidade
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

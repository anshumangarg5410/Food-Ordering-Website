import { createSlice, nanoid } from "@reduxjs/toolkit";
import burgerImg from "../../assets/burger.png"; 
// import Tandorri_Mix_Parantha from "../../assets/paranthas/Tandorri_Mix_Parantha.avif"
const initialState = {
  cart: [
    // {
    //   id: 1,
    //   image: burgerImg,
    //   name: "Burger",
    //   singleprice: 200,
    //   quantity: 2,
    //   totalprice: 200 * 2, 
    // },
    // {
    //   id: 2,
    //   image: Tandorri_Mix_Parantha,
    //   name: "Tandorri Mix Parantha",
    //   singleprice: "40",
    //   quantity: 2,
    //   totalprice: 200 * 2, 
    // },
  ],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, singleprice, quantity, image } = action.payload;

      const item = {
        // id: nanoid(),
        // name: action.payload.name,
        // singleprice: action.payload.singleprice,
        // quantity: action.payload.quantity,
        // totalprice: action.payload.singleprice * action.payload.quantity,
        // customizations: action.payload.customizations
        //another method :

        id: nanoid(),
        name,
        singleprice,
        quantity,
        image,
        totalprice: singleprice * quantity,
      };

      state.cart.push(item);
    },

    increaseqnt: (state, action) => {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1, totalprice: item.singleprice * (item.quantity + 1) } : item);
    },

    decreaseqnt: (state, action) => {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1, totalprice: item.singleprice * (item.quantity - 1) } : item);
    },

    deleteitem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id != action.payload)
    },



  },
});

export const { addItem, increaseqnt, deleteitem, decreaseqnt } = CartSlice.actions;

export default CartSlice.reducer;
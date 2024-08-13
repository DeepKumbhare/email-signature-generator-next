import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  inputData: [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      name: "John Doe",
      title: "Senior Developer",
      email: "johndoe@example.com",
      phone: "+1 (234) 567-890",
      company: "Example Corp",
      website: "www.example.com",
      address: "123 Main Street, City, Country",
    },
  ],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;

      console.log(value, "image");

      state.inputData = state.inputData.map((item) => ({
        ...item,
        [field]: value,
      }));
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;

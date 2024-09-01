import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  inputData: [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Senior Developer",
      email: "johndoe@example.com",
      phone: "+1 (234) 567-890",
      company: "Example Corp",
      textColor: '#000000',
      themeColor: '#ff00ff',
      linkColor: '#0000ff',
      website: "www.example.com",
      address: "123 Main Street, City, Country",
      facebook: "",
      linkedin: "",
      twitter: "",
      instagram: "",
    },
  ],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;

      state.inputData = state.inputData.map((item) => ({
        ...item,
        [field]: value,
      }));
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;

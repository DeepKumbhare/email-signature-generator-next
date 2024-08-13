import { configureStore} from '@reduxjs/toolkit';
import inputReducer from '../app/features/form/inputSlices';

export const store = configureStore({
    reducer: inputReducer
})
import { configureStore } from "@reduxjs/toolkit";
import NutritionReducer from './src/utils/nutritionSlice'

export const store=configureStores({
    reducer:{
        product:NutritionReducer,
    },
});
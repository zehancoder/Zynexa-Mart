import { configureStore } from "@reduxjs/toolkit";
import slicer from "../redux/slice"
export const store = configureStore({
    reducer: slicer
});

import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './Slices/CourseSlice'

export const store = configureStore({
    reducer: {
        course: courseReducer
    }
})
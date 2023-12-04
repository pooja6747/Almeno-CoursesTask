import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchCourse = createAsyncThunk("fetchCourse", async () => {
    const res = await fetch(`http://localhost:4000/api/course`);
    try {
        const result = await res.json()
        return result
    } catch (error) {
        console.log("error", error)
        return error
    }
});

export const CourseSlice = createSlice({
    name: 'course',
    initialState: {
        isLoading: false,
        data: [],
        error: false
    },
    extraReducers: {
        [fetchCourse.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchCourse.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        },
        [fetchCourse.rejected]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        }
    }
})



export default CourseSlice.reducer
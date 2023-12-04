import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchCourse = createAsyncThunk("fetchCourse", async () => {
    const res = await fetch('https://coursedetails-api-service.onrender.com/api/course');
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
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourse.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                console.log("action.payload", action.payload)
            })
            .addCase(fetchCourse.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }

})



export default CourseSlice.reducer
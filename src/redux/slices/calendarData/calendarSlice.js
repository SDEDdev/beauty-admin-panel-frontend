import { createSlice } from "@reduxjs/toolkit";
import { fetchCalendarEvents } from "./calendarActions";


const initialState = {
    loading: false,
    events: [], //calendar events
    error: null,
}
const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {},
    extraReducers: {
        // Get Calendar events
        [fetchCalendarEvents.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchCalendarEvents.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.events = payload
        },
        [fetchCalendarEvents.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
});

export default calendarSlice.reducer;
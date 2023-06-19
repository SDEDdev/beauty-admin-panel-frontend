import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalendarEvents } from '../redux/slices/calendarData/calendarActions';

const Calendar = () => {
    const { events } = useSelector((state) => state.calendarEvents);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCalendarEvents());
    }, [dispatch])

    return (
        <div>Calendar</div>
    )
}

export default Calendar
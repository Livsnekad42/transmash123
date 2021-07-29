// @ts-ignore
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React from 'react';

const localizer = momentLocalizer(moment)

interface Event {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
}


const myEventsList: Array<Event> = [{
    title: '123',
    start: new Date(),
    end: new Date(),
    allDay: true
}]


const MyCalendar = () => {
        return (
            <div>
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        )
    }
;

export default MyCalendar;
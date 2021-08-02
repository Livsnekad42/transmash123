// @ts-ignore
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React, {useState} from 'react';

const localizer = momentLocalizer(moment)

interface Event {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
    id?: any
}


const myEventsList: Array<Event> = [{
    title: '123',
    start: new Date(),
    end: new Date(),
    allDay: true
}]


const MyCalendar = () => {
    const [events, setEvents] = useState([{}]);

    function handleSelect(event: any) {
       let start = event.start;
       let startMonth = start.getMonth();
       let startDay = start.getDay();
       let startYear = start.getFullYear();
       let dummy = new Date(startYear, startMonth, startDay, 7);
       let dummy2 = new Date(startYear, startMonth, startDay, 19);
       console.log(dummy);
       console.log(dummy2);
    }
        return (
            <div>
                <Calendar
                    selectable
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    onSelectEvent={(event: any) => console.log('alert', event)}
                    onSelectSlot={handleSelect}
                />
            </div>
        )
    }
;

export default MyCalendar;
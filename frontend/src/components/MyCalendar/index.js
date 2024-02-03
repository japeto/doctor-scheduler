import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

//array de eventos
const myEventsList= [{
  title: "today",
  start: new Date('2024-01-01 10:22:00'),
  end: new Date('2024-01-01 10:42:00')
},
{
  title: "string",
   start: new Date('2024-02-02 12:22:00'),
  end: new Date('2024-02-02 13:42:00')
}]

const MyCalendar = (props) => (
  
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700, width:900 }}
    />
  </div>
)

export default MyCalendar;
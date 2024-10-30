import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from './events'
import './App.css'
import CustomEvent from './CustomEvent'

const localizer = momentLocalizer(moment)

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      events={events}
      endAccessor="end"
      defaultView='week'
      views={['month','week','day']}
      style={{ height: 500,width:800 }}
      max={moment("2024-10-29T18:00:00").toDate()}
      min={moment("2024-10-29T08:00:00").toDate()}
      components={{
        event: CustomEvent,
      }}
    />
  </div>
)

function App() {
  return (
    <div className='cal'>
      <MyCalendar/>
    </div>
  )
}

export default App
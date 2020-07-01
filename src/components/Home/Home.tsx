import React from 'react'
import {Link} from 'react-router-dom';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

const Home = () => {
  return (
    <div>
      <Link to="/roberto-barber/login">Log Out</Link>
      <FullCalendar
        defaultView="timeGridWeek"
        header={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]} />
    </div>
  )
}

export default Home

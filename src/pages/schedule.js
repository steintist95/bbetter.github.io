import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


export default function Schedule () {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
      <>
        <Calendar id="calen"
            value={dateState}
            onChange={changeDate}
            calendarType= "US"
            />
        <p>Current Selected Date is: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </>
    )
  }
    


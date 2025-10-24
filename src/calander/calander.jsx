import React from 'react';
import './calander.css';

export function Calander() {
    localStorage.setItem('eventname', '[name missing]');
    localStorage.setItem('eventdate', '[date missing]');
    localStorage.setItem('eventtime', '[time missing]');
    localStorage.setItem('eventpeople', 'no one');
    localStorage.setItem('eventspoons', '0');
    const [eventsList, updateEventsList] = React.useState([]);
    // const newEventsList = [...eventsList, eventDetails];
    // React.useEffect(() => {
    //     const oldEventsList = localStorage.getItem('eventsList');
        
    //     localStorage.setItem('eventsList', newEventsList);
    // }, []);
    async function createEvent(en, ed, et, ep, es) {
        console.log('event name:', en);
        const newEvent = [en, ed, et, ep, es];
        updateEventsList([...eventsList, newEvent]);
        localStorage.setItem('eventname', '[name missing]');
        localStorage.setItem('eventdate', '[date missing]');
        localStorage.setItem('eventtime', '[time missing]');
        localStorage.setItem('eventpeople', 'no one');
        localStorage.setItem('eventspoons', '0');
    }

  return (
    <main className="container-fluid bg-secondary text-center">
        <h3>Your Events</h3>

      <ul className="selectedday">
        {eventsList.length === 0 ? (
            <li>no events</li>
        ) : (
            eventsList.map((eventItem, index) => (
            <li key={index}>
                {eventItem[1]}, {eventItem[2]}: {eventItem[0]} with {eventItem[3]}. Spoon Estimate: {eventItem[4]}
            </li>
        )))}
          <hr />
      <p></p>
      </ul>
      <div className="calandernew">
          <ul>
            <div className='newEvent'>

                <li className='input-group mb-3'>
                    <span className='input-group-text'>Event Name</span>
                    <input className='form-control' type='text' placeholder='Enter Name' onChange={(e) => {localStorage.setItem('eventname', e.target.value)}}/>
                </li>
                <li className='input-group mb-3'>
                <span className='input-group-text'>Date</span>
                <input className='form-control' type='text' placeholder='YYYY/MM/DD' onChange={(e) => {localStorage.setItem('eventdate', e.target.value)}} />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Time</span>
                    <input className='form-control' type='text' placeholder='HH:MM' onChange={(e) => {localStorage.setItem('eventtime', e.target.value)}} />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Invite People</span>
                    <input className='form-control' type='text' placeholder='friend@email' onChange={(e) => {localStorage.setItem('eventpeople', e.target.value)}} />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Enter Spoon Estimate:</span>
                    <input className='form-control' type='text' placeholder='Number 1-5' onChange={(e) => {localStorage.setItem('eventspoons', e.target.value)}} />
                </li>
            </div>
            <button className="newevent" onClick={() => createEvent(localStorage.getItem('eventname'), localStorage.getItem('eventdate'), localStorage.getItem('eventtime'), localStorage.getItem('eventpeople'), localStorage.getItem('eventspoons'))}>Create New Event</button>
          </ul>
          <li>
              <ul className="notifications">
                  <p></p>
                  <p>Notifications:</p>
                  <li className="new-alert">Bob has invited you to an event: Barbeque
                      <li><button className="accept">Accept</button> <button className="reject">Reject</button></li>
                  </li>
                  <li className="new-alert">Bob has invited you to an event: Movie Night
                      <li><button className="accept">Accept</button> <button className="reject">Reject</button></li>
                  </li>
                  <li className="new-alert">Steven has canceled an event: Wedding
                      <li><button className="dismiss">Dismiss</button></li>
                  </li>
                  <li className="new-alert">Joe has invited you to an event: Pool
                      <li><button className="accept">Accept</button> <button className="reject">Reject</button></li>
                  </li>
              </ul>
          </li>
      </div>
    </main>
  );
}
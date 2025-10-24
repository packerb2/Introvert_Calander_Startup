import React from 'react';
import './calander.css';

export function Calander() {
    const testFakeEvent = ['BBQ', '0000/00/00', '99:99', 'oops', '3', 'Lizard']
    localStorage.setItem('eventname', '[name missing]');
    localStorage.setItem('eventdate', '[date missing]');
    localStorage.setItem('eventtime', '[time missing]');
    localStorage.setItem('eventpeople', 'no one');
    localStorage.setItem('eventspoons', '0');

    const [eventsList, updateEventsList] = React.useState([]);
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
                  <li className="new-alert">{testFakeEvent[5]} has invited you to {testFakeEvent[0]} on {testFakeEvent[1]} at {testFakeEvent[2]}. Spoon Estimate: {testFakeEvent[4]}
                      <li><button className="accept"onClick={() => createEvent(testFakeEvent[0], testFakeEvent[1], testFakeEvent[2], testFakeEvent[5], testFakeEvent[4])}>Accept</button> <button className="reject">Reject</button></li>
                  </li>
              </ul>
          </li>
      </div>
    </main>
  );
}
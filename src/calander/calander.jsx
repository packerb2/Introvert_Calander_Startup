import React, { useState } from 'react';
import { NewEvent, Notifier } from './Notifier'
import './calander.css';


export function Calander() {
    const testFakeEvent = ['BBQ', '0000/00/00', '99:99', 'oops', '3', 'Lizard']
    localStorage.setItem('eventname', '[name missing]');
    localStorage.setItem('eventdate', '[date missing]');
    localStorage.setItem('eventtime', '[time missing]');
    localStorage.setItem('eventpeople', 'no one');
    localStorage.setItem('eventspoons', '0');

    const [eventsList, updateEventsList] = React.useState([]);
    async function createEvent(em, en, ed, et, ep, es) {
        const newEvent = {
            email : em,
            name : en,
            date : ed,
            time : et,
            people : ep,
            spoons : es,
        }
        updateEventsList([...eventsList, newEvent]);
        document.getElementById('newEventNameField').value = '';
        document.getElementById('newEventDateField').value = '';
        document.getElementById('newEventTimeField').value = '';
        document.getElementById('newEventPeopleField').value = '';
        document.getElementById('newEventSpoonField').value = '';
        localStorage.setItem('eventname', '[name missing]');
        localStorage.setItem('eventdate', '[date missing]');
        localStorage.setItem('eventtime', '[time missing]');
        localStorage.setItem('eventpeople', 'no one');
        localStorage.setItem('eventspoons', '0');
        localStorage.setItem('eventsList', eventsList);
        await fetch('/api/event', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEvent),
        });
        await fetch('/api/events', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(em),
        });
        Notifier.broadcastEvent(userName, NewEvent.Invite, 'has invited you to ' + en + ' at ' + ed + ', ' + et + '.');
    }

    async function createEventFromNotification(em, en, ed, et, ep, es) {
        setIsVisible(!isVisible);
        console.log('event name:', en);
        const newEvent = {
            email : em,
            name : en,
            date : ed,
            time : et,
            people : ep,
            spoons : es,
        }
        updateEventsList([...eventsList, newEvent]);
        await fetch('/api/event', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEvent),
        });
        await fetch('/api/events', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(em),
        });
    }
    const [isVisible, setIsVisible] = React.useState(true);
    
    React.useEffect(() => {
        fetch('/api/events')
        .then((response) => response.json())
        .then((fullEventsList) => {
            updateEventsList(fullEventsList);
        });
    }, []);

  return (
    <main className="container-fluid bg-secondary text-center">
        <h3>Your Events</h3>

      <ul className="selectedday">
        {eventsList.length === 0 ? (
            <li>no events</li>
        ) : (
            eventsList.map((eventItem, index) => (
            <li key={index}>
                {eventItem.name}, {eventItem.date}: {eventItem.time} with {eventItem.people}. Spoon Estimate: {eventItem.spoons}
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
                    <input className='form-control' id='newEventNameField' type='text' placeholder='Enter Name' onChange={(e) => {localStorage.setItem('eventname', e.target.value)}}/>
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Date</span>
                    <input className='form-control' id='newEventDateField' type='text' placeholder='YYYY/MM/DD' onChange={(e) => {localStorage.setItem('eventdate', e.target.value)}} />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Time</span>
                    <input className='form-control' id='newEventTimeField' type='text' placeholder='HH:MM' onChange={(e) => {localStorage.setItem('eventtime', e.target.value)}} />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Invite People</span>
                    <input className='form-control' id='newEventPeopleField' type='text' placeholder='friend@email' onChange={(e) => {localStorage.setItem('eventpeople', e.target.value)}} />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Enter Spoon Estimate:</span>
                    <input className='form-control' id='newEventSpoonField' type='text' placeholder='Number 1-5' onChange={(e) => {localStorage.setItem('eventspoons', e.target.value)}} />
                </li>
            </div>
            <button className="newevent" onClick={() => createEvent(localStorage.getItem('userName'), localStorage.getItem('eventname'), localStorage.getItem('eventdate'), localStorage.getItem('eventtime'), localStorage.getItem('eventpeople'), localStorage.getItem('eventspoons'))}>Create New Event</button>
          </ul>
          <li>
              <ul className="notifications">
                  <p></p>
                  <p>Notifications:</p>
                  {isVisible && 
                  // reference simon players.jsx and .css for having notifications show up
                    <li className="new-alert">{testFakeEvent[5]} has invited you to {testFakeEvent[0]} on {testFakeEvent[1]} at {testFakeEvent[2]}. Spoon Estimate: {testFakeEvent[4]}
                      <li><button className="accept" onClick={() => createEventFromNotification(localStorage.getItem('userName'), testFakeEvent[0], testFakeEvent[1], testFakeEvent[2], testFakeEvent[5], testFakeEvent[4])}>Accept</button>
                      <button className="reject" onClick={() => setIsVisible(!isVisible)}>Reject</button></li>
                    </li>
                    }
              </ul>
          </li>
      </div>
    </main>
  );
}
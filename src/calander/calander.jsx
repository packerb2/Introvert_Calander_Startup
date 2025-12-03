import React, { useState } from 'react';
import { NewEvent, Notifier } from './Notifier'
import './calander.css';


export function Calander() {
  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    Notifier.addHandler(handleEvent);

    return () => {
      Notifier.removeHandler(handleEvent);
    };
  });

  function handleEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === NewEvent.Invite) {
        message = `${event.from} has invited you to ${event.value.en} on ${event.value.ed} at ${event.value.et}. Spoon: ${event.value.es}`;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }
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
        Notifier.broadcastEvent(userName, NewEvent.Invite, NewEvent);
    }
    
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
            <div className='alerts'>
            Notifications
            <div id='messages'>{createMessageArray()}</div>
            </div>
          </li>
      </div>
    </main>
  );
}
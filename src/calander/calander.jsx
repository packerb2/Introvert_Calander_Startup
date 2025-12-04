import React, { useState } from 'react';
import './calander.css';
import ReactDOM from 'react-dom/client';


function Chat({ webSocket }) {
  const [name, setName] = React.useState('');

  return (
    <submain>
      <Name updateName={setName} />
      <Message name={name} webSocket={webSocket} />
      <Conversation webSocket={webSocket} />
    </submain>
  );
}

function Name({ updateName }) {
  return (
    <main>
      <div className='name'>
        <fieldset id='name-controls'>
          <legend>My Name</legend>
          <input onChange={(e) => updateName(e.target.value)} id='my-name' type='text' />
        </fieldset>
      </div>
    </main>
  );
}

function Message({ name, webSocket }) {
  const [message, setMessage] = React.useState('');

  function doneMessage(e) {
    if (e.key === 'Enter') {
      sendMsg();
    }
  }

  function sendMsg() {
    webSocket.sendMessage(name, message);
    setMessage('');
  }

  const disabled = name === '' || !webSocket.connected;
  return (
    <main>
      <fieldset id='chat-controls'>
        <legend>Chat</legend>
        <input disabled={disabled} onKeyDown={(e) => doneMessage(e)} value={message} onChange={(e) => setMessage(e.target.value)} type='text' />
        <button disabled={disabled || !message} onClick={sendMsg}>
          Send
        </button>
      </fieldset>
    </main>
  );
}

function Conversation({ webSocket }) {
  const [chats, setChats] = React.useState([]);
  React.useEffect(() => {
    webSocket.addObserver((chat) => {
      setChats((prevMessages) => [...prevMessages, chat]);
    });
  }, [webSocket]);

  const chatEls = chats.map((chat, index) => (
    <div key={index}>
      <span className={chat.event}>{chat.from}</span> {chat.msg}
    </div>
  ));

  return (
    <main>
      <div id='chat-text'>{chatEls}</div>
    </main>
  );
}

class ChatClient {
  observers = [];
  connected = false;

  constructor() {
    // Adjust the webSocket protocol to what is being used for HTTP
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    // Display that we have opened the webSocket
    this.socket.onopen = (event) => {
      this.notifyObservers('system', 'websocket', 'connected');
      this.connected = true;
    };

    // Display messages we receive from our friends
    this.socket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      this.notifyObservers('received', chat.name, chat.msg);
    };

    // If the webSocket is closed then disable the interface
    this.socket.onclose = (event) => {
      this.notifyObservers('system', 'websocket', 'disconnected');
      this.connected = false;
    };
  }

  // Send a message over the webSocket
  sendMessage(name, msg) {
    this.notifyObservers('sent', 'me', msg);
    this.socket.send(JSON.stringify({ name, msg }));
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(event, from, msg) {
    this.observers.forEach((h) => h({ event, from, msg }));
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Chat webSocket={new ChatClient()} />);


export function Calander() {
    const testFakeEvent = ['BBQ', '0000/00/00', '99:99', 'oops', '3', 'Lizard']
    localStorage.setItem('eventname', '[name missing]');
    localStorage.setItem('eventdate', '[date missing]');
    localStorage.setItem('eventtime', '[time missing]');
    localStorage.setItem('eventpeople', 'no one');
    localStorage.setItem('eventspoons', '0');

    const [eventsList, updateEventsList] = React.useState([]);
    async function createEvent(em, en, ed, et, ep, es) {
        //const newEvent = [en, ed, et, ep, es];
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
                  <Chat webSocket={new ChatClient()} />
              </ul>
          </li>
      </div>
    </main>
  );
}
import React from 'react';
import './calander.css';

export function Calander() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <h3>Select Day</h3>
      <div className='cInput'>
        <li className='input-group mb-3'>
          <span className='input-group-text'>Year</span>
          <input className='form-control' type='text' placeholder='XXXX' />
        </li>
        <li className='input-group mb-3'>
          <span className='input-group-text'>Month</span>
          <input className='form-control' type='text' placeholder='XX' />
        </li>
        <li className='input-group mb-3'>
          <span className='input-group-text'>Day</span>
          <input className='form-control' type='text' placeholder='XX' />
        </li>
      </div>

      <ul className="selectedday">
          <div className="event">Event Name
              <li className="participants">Joe is coming</li>
              <li>Selected Spoons:</li>
              <button className="addspoon">Long Distance</button>
              <button className="addspoon">Large Gathering</button>
              <button className="addspoon">Requires Packing</button>
              <button className="addspoon">No Leaving Early</button>
              <button className="addspoon">Hosting</button>
              <li className="spoon-rating">Spoon score: x</li>
              <li><button className="soft">Hope for Cancel</button> <button className="cancel">Cancel Event</button></li>
          </div>
          <hr />
      <p></p>
      </ul>
      <div className="calandernew">
          <li>
            <div className='newEvent'>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Event Name</span>
                    <input className='form-control' type='text' placeholder='Enter Name' />
                </li>
                <li className='input-group mb-3'>
                    <span className='input-group-text'>Invite People</span>
                    <input className='form-control' type='text' placeholder='friend@email' />
                </li>
                <li>Select Spoons:</li>
                <button className="addspoon">Long Distance</button>
                <button className="addspoon">Large Gathering</button>
                <button className="addspoon">Requires Packing</button>
                <button className="addspoon">No Leaving Early</button>
                <button className="addspoon">Hosting</button>
            </div>
            <button className="newevent">Create New Event</button>
          </li>
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
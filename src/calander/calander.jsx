import React from 'react';
import './calander.css';

export function Calander() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="calandertop">
          <li><button className="newevent">Create New Event</button></li>
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

      <div>
          <table>
              <div className="month">
                  <header>
                      <h3><span className="month-name">Decembruary</span></h3>
                  </header>
              </div>
              <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
              </tr>
              <tr>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">1</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">2</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">3</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">4</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">5</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">6</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">7</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
              </tr>
              <tr>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">8</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">9</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">10</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">11</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">12</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">13</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">14</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
              </tr>
              <tr>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">15</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">16</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">17</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">18</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">19</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">20</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">21</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
              </tr>
              <tr>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">22</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">23</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">24</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">25</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">26</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">27</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">28</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
              </tr>
              <tr>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">29</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">30</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">31</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">32</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">33</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">34</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
                  <td>
                      <button>
                          <svg aria-hidden="true" viewBox="0 0 100 100" height="50" width="70"></svg>
                          <span className="date">35</span>
                          <br />
                          <span className="Events">Number of Events: x</span>
                      </button>
                  </td>
              </tr>
          </table>
      </div>

      <ul className="selectedday">
          <div className="event">Event 1:
              <li className="participants">Joe is coming</li>
              <li>Select Spoons:</li>
              <button className="addspoon">Long Distance</button>
              <button className="addspoon">Large Gathering</button>
              <button className="addspoon">Requires Packing</button>
              <button className="addspoon">No Leaving Early</button>
              <button className="addspoon">Hosting</button>
              <li className="spoon-rating">Spoon score: x</li>
              <li><button className="soft">Hope for Cancel</button> <button className="cancel">Cancel Event</button></li>
          </div>
          <hr />
          <div className="event">Event 2:
              <li className="participants">Joe is coming</li>
              <li>Select Spoons:</li>
              <button className="addspoon">Long Distance</button>
              <button className="addspoon">Large Gathering</button>
              <button className="addspoon">Requires Packing</button>
              <button className="addspoon">No Leaving Early</button>
              <button className="addspoon">Hosting</button>
              <li className="spoon-rating">Spoon score: x</li>
              <li><button className="soft">Hope for Cancel</button> <button className="cancel">Cancel Event</button></li>
          </div>
      <p></p>
      </ul>
    </main>
  );
}
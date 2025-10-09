import React from 'react';
import './analysis.css';

export function Analysis() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <p>A Summary of the amount of Spoons used by your recent activities.</p>
      <table className="table table-warning table-striped-columns">
          <thead className="table-dark">
              <th></th>
              <th>Highest Score |</th>
              <th>Lowest Score |</th>
              <th>Total Score |</th>
              <th>Average Score |</th>
          </thead>
          <tbody>
              <tr>
                  <th>This Week</th>
                  <td>5 (Wednesday)</td>
                  <td>1 (Monday)</td>
                  <td>23</td>
                  <td>3</td>
              </tr>
              <tr>
                  <th>This Month</th>
                  <td>5 (Wednesday)</td>
                  <td>1 (Monday)</td>
                  <td>80</td>
                  <td>3</td>
              </tr>
          </tbody>
      </table>

      <p></p>
      <heading>Your Week:</heading>
      <table className="table table-warning table-striped-columns">
          <thead className="table-dark">
              <th>Sunday |</th>
              <th>Monday |</th>
              <th>Tuesday |</th>
              <th>Wednesday |</th>
              <th>Thursday |</th>
              <th>Friday |</th>
              <th>Saturday</th>
          </thead>
          <tbody>
              <tr>
                  <td>5</td>
                  <td>1</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>3</td>
                  <td>5</td>
              </tr>
          </tbody>
      </table>

      <p>
          (For your own welbeing, please note that these scores are estimates at best and
          that different people have different goals when it comes to spoon usage) 
      </p>
    </main>
  );
}
import React from 'react';
import './analysis.css';

export function Analysis() {
    const [fullEventsList, setEventsList] = React.useState([]);
    const total = 0;
    const averageScore = 0;
    const high = 0;
    const low = 0;
    React.useEffect(() => {
        const eventsList = localStorage.getItem('eventsList');
        if (eventsList) {
            setEventsList(JSON.parse(eventsList));
        }
    })
    if (fullEventsList.length !== 0) {
        low = 100;
        for (let i = 0; i < fullEventsList.length; i++) {
            const spoon = Number(fullEventsList[i][4])
            total += spoon;
            if (spoon > high) {
                high = spoon;
            }
            if (spoon < low) {
                low = spoon;
            }
        }
        averageScore = total / fullEventsList.length;
    }

  return (
    <main className="container-fluid bg-secondary text-center">
      <p>A Summary of the amount of Spoons used by your activities.</p>
      <table className="table table-warning table-striped-columns">
          <thead className="table-dark">
              <th>Highest Spoon Score |</th>
              <th>Lowest Spoon Score |</th>
              <th>Total Spoon Score |</th>
              <th>Average Spoon Score |</th>
          </thead>
          <tbody>
              <tr>
                  <td>{high}</td>
                  <td>{low}</td>
                  <td>{total}</td>
                  <td>{averageScore}</td>
              </tr>
          </tbody>
      </table>

      <p>
          (For your own welbeing, please note that these scores are estimates and
          that different people have different goals when it comes to spoon usage) 
      </p>
    </main>
  );
}
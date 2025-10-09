import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <p>
          The name of this calander came from "Spoon Theory". This theory states that each person only has a limited amount of energy
          each day that they can spend on any given task. This energy is measured in spoons as a way of visualizing how much energy
          an activity takes. Once a spoon is spent, it cannot be used for another activity. If a person runs out of spoons, even simple
          tasks become impossible.
      </p>

      <p>
          The goal of this calander is to help people to better visualize where their energy, or spoons, are being spent and to assist
          in better managing their energy so that they can avoid burnout and focus on whatever is most important to them.
      </p>
      <div id="picture" className="picture-box"><img width="600px" src="feature-image-spoon-theory-jpg.webp" /></div>
      <p className="credit">Image by Ackadia</p>
    </main>
  );
}
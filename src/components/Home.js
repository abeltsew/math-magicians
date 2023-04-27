import React from 'react';
import './home.css';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Welcome to our Page</h1>
    <p className="home-description">
      An electronic calculator is typically a portable electronic device used to
      perform calculations, ranging from basic arithmetic to complex
      mathematics. The first solid-state electronic calculator was created in
      the early 1960s. Pocket-sized devices became available in the 1970s,
      especially after the Intel 4004, the first microprocessor, was developed
      by Intel for the Japanese calculator company Busicom. Modern electronic
      calculators vary from cheap, give-away, credit-card-sized models to sturdy
      desktop models with built-in printers. They became popular in the
      mid-1970s as the incorporation of integrated circuits reduced their size
      and cost. By the end of that decade, prices had dropped to the point where
      a basic calculator was affordable to most and they became common in
      schools.
      <span className="new-line">
        {' '}
        Computer operating systems as far back as early Unix have included
        interactive calculator programs such as dc and hoc, and interactive
        BASIC could be used to do calculations on most 1970s and 1980s home
        computers. Calculator functions are included in most smartphones,
        tablets and personal digital assistant (PDA) type devices.
      </span>
    </p>
  </div>
);

export default Home;

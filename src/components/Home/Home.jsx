import React, { useState } from 'react';
import './Home.css';

function Home() {

  const unhoveringAnimation = 'unhovering 1s forwards';

  const [styles, setStyles] = useState({});

  const onMouseLeaveStyles = () => {
    setStyles({animation: unhoveringAnimation,});
  };

  return (
    <div className='home-container'>
      <div className="main-section">
        <h1 className='title'>Your Notes With a Beautiful Vibe</h1>
        <h2 className='subtitle'>Your app for taking notes and quickly sharing them with friends.</h2>
        <button className="start" style={styles} onMouseLeave={onMouseLeaveStyles} onMouseEnter={() => setStyles({})}>Take notes for free</button>
      </div>
    </div>
  );
};

export default Home;
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
//  import revealOptions from './revealOptions';

import '../../notes';
import 'reveal.js/css/reveal.css';

const Deck = ({ revealOptions, children }) => {
  useEffect(() => {
    Reveal.initialize({ ...revealOptions });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};

export default Deck;

/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import Reveal from 'reveal.js';

// eslint-disable-next-line react/prop-types
const NewSlideForm = ({ setShowAdd }) => {
  const [precedingSlide, setPrecedingSlide] = useState(-1);
  const [userContent, setUserContent] = useState('');

  const addNewSlide = (content, index) => {
    // Reveal.addEventListener('ready', (content = '', index = -1) => {
    const dom = { slides: '' };
    dom.slides = document.querySelector('.reveal .slides');
    const newSlide = document.createElement('section');

    if (index == -1) {
      newSlide.classList.add('future');
      dom.slides.appendChild(newSlide);
      // just enable it, even if it is
      document.querySelector('.navigate-right').classList.add('enabled');
    } else if (index > Reveal.getIndices().h) {
      newSlide.classList.add('future');
      dom.slides.insertBefore(
        newSlide,
        dom.slides.querySelectorAll(`section:nth-child(${index + 1})`)[0],
      );
    } else if (index <= Reveal.getIndices().h) {
      newSlide.classList.add('past');

      dom.slides.insertBefore(
        newSlide,
        dom.slides.querySelectorAll(`section:nth-child(${index + 1})`)[0],
      );

      Reveal.next();
    }
    newSlide.innerHTML = content;
    // Reveal.sync();
    // });
  };

  return (
    <>
      <div className="div-position">
        <form
          onSubmit={e => {
            e.preventDefault();
            addNewSlide(userContent, precedingSlide);
          }}
        >
          <h6>Preceding slide number:</h6>
          <input
            type="number"
            onChange={e => setPrecedingSlide(e.target.value)}
          />
          <h6>HTML Content:</h6>
          <input
            style={{ height: '450px' }}
            type="textarea"
            onChange={e => setUserContent(e.target.value)}
          />
          <br />
          <input type="submit" style={{ width: '100%', marginTop: '5px' }} />
        </form>
        <button
          type="button"
          style={{ width: '100%', marginTop: '5px' }}
          onClick={() => {
            setShowAdd(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
export default NewSlideForm;

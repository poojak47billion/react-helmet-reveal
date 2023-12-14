import React, { useState } from 'react';
import Reveal from 'reveal.js';

// eslint-disable-next-line react/prop-types
const DeleteSlideForm = ({ setShowDelete }) => {
  const [slideToDelete, setSlideToDelete] = useState(-1);
  Reveal.on('slidechanged', event => {
    console.log(event, 'dfgh');
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  });
  const deleteSlide = index => {
    const dom = { slides: '', wrapper: '' };
    dom.wrapper = document.querySelector('.reveal');
    dom.slides = document.querySelector('.reveal .slides');
    const target = dom.wrapper.querySelectorAll(
      `.slides > section:nth-child(${index + 1})`,
    )[0]
      ? dom.wrapper.querySelectorAll(
          `.slides > section:nth-child(${index + 1})`,
        )[0]
      : false;
    if (index === -1) {
      if (Reveal.isLastSlide()) Reveal.prev();
      dom.slides.removeChild(
        dom.wrapper.querySelectorAll('.slides > section')[
          dom.wrapper.querySelectorAll('.slides > section').length - 1
        ],
      );
      if (Reveal.isLastSlide())
        document.querySelector('.navigate-right').classList.remove('enabled');
    } else if (index > Reveal.getIndices().h && target) {
      dom.slides.removeChild(target);
      if (
        Reveal.getIndices().h ===
        dom.wrapper.querySelectorAll('.slides > section').length - 1
      )
        document.querySelector('.navigate-right').classList.remove('enabled');
    } else if (index < Reveal.getIndices().h && target) {
      dom.slides.removeChild(target);
      // eslint-disable-next-line no-restricted-globals
      location.hash = `/${parseInt(Reveal.getIndices().h - 1, 10)}`;
    } else if (index === Reveal.getIndices().h && target) {
      if (index === 0) {
        Reveal.next();
        document.querySelector('.navigate-left').classList.remove('enabled');
      } else Reveal.prev();
      dom.slides.removeChild(target);
      if (dom.wrapper.querySelectorAll('.slides > section').length === index)
        document.querySelector('.navigate-right').classList.remove('enabled');
    }
    Reveal.sync();
    // });
  };

  return (
    <>
      <div className="div-position">
        <form
          onSubmit={e => {
            e.preventDefault();
            deleteSlide(slideToDelete);
          }}
        >
          <h6>Slide to delete:</h6>
          <input
            type="number"
            onChange={e => setSlideToDelete(e.target.value)}
          />
          <br />
          <input type="submit" style={{ width: '100%', marginTop: '5px' }} />
        </form>
        <button
          type="button"
          style={{ width: '100%', marginTop: '5px' }}
          onClick={() => {
            setShowDelete(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
export default DeleteSlideForm;

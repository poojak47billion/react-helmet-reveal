import React, { useContext } from 'react';
import '../Themes/override.css';
import SlideThemeContext from '../Context/SlideDetail';

// eslint-disable-next-line react/prop-types
const ChangeThemeForm = ({ setShowTheme, setTheme }) => {
  const { theme, setThemeInContext } = useContext(SlideThemeContext);
  // console.log(setThemeInContext, 'SlideDetailContext');

  function handleSelectTheme(event) {
    setTheme(event.target.value);
    setThemeInContext(event.target.value);
    console.log(theme, 'theme near context');
  }

  return (
    <>
      <div className="div-position">
        <select onChange={handleSelectTheme}>
          {/* <select> */}
          <option value="reveal">Default</option>
          <option value="black">Black</option>
          <option value="league">League</option>
          <option value="beige">Beige</option>
          <option value="night">Night</option>
          <option value="serif">Serif</option>
          <option value="simple">Simple</option>
          <option value="solarized">Solarized</option>
          <option value="moon">Moon</option>
          <option value="sky">Sky</option>
          <option value="blood">Blood</option>
        </select>
        <button
          type="button"
          style={{ width: '100%', marginTop: '5px' }}
          onClick={() => {
            setShowTheme(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
export default ChangeThemeForm;

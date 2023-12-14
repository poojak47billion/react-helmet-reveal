import React, { useContext, useEffect, useState } from 'react';
import SlideThemeContext from '../Context/SlideDetail';

// eslint-disable-next-line react/prop-types
const SlideDetails = ({ setShowDetails }) => {
  const { theme } = useContext(SlideThemeContext);
  const [newTheme, setNewTheme] = useState(theme);

  useEffect(() => {
    setNewTheme(theme);
  }, [theme]);

  return (
    <>
      <div className="detail-div-position">
        <div
          style={{
            height: '40%',
            padding: '2%',
            background: 'rgb(255 249 214 / 47%)',
          }}
        >
          <h4>Current Theme</h4>
          <br />
          <h3>{newTheme}</h3>
        </div>
        <button
          type="button"
          style={{ width: '100%', marginTop: '5px' }}
          onClick={() => {
            setShowDetails(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
export default SlideDetails;

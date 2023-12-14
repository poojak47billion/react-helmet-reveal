import React from 'react';

// set the defaults
const SlideThemeContext = React.createContext({
  theme: 'default',
  setThemeInContext: undefined,
});

export default SlideThemeContext;

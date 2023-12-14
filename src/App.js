/* eslint-disable global-require */
/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import Reveal from "reveal.js";
import { Helmet } from "react-helmet";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Deck from "./Components/RevealComponents/Deck";
import Slides from "./Slides";
import NewSlideForm from "./Components/newSlideform";
import DeleteSlideForm from "./Components/deleteSlideForm";
import ChangeThemeForm from "./Components/ChangeThemeForm";
import SlideDetails from "./Components/SlideDetails";
import SlideThemeContext from "./Context/SlideDetail";

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [theme, setTheme] = useState("white");
  const [reqTheme, setReqTheme] = useState(
    require(`../node_modules/reveal.js/css/theme/white.css`)
  );
  const addClass = (CurrentSlideRef) => {
    for (let i = 0; i < CurrentSlideRef.children.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      CurrentSlideRef.children[i].classList.add("resize");
    }
  };
  useEffect(() => {
    const initRef = Reveal.getSlides()[Reveal.getIndices().h];
    console.log(initRef, "initRef");
    addClass(initRef);
    Reveal.addEventListener(
      "slidechanged",
      function(event) {
        addClass(event.currentSlide);
      },
      [Reveal]
    );
  }, []);
  useEffect(() => {
    switch (theme) {
      case "black":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/black.css`));
        break;
      case "default":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/white.css`));
        break;
      case "league":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/league.css`));
        break;
      case "beige":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/beige.css`));
        break;
      case "night":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/night.css`));
        break;
      case "serif":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/serif.css`));
        break;
      case "simple":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/simple.css`));
        break;
      case "solarized":
        setReqTheme(
          require(`../node_modules/reveal.js/css/theme/solarized.css`)
        );
        break;
      case "moon":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/moon.css`));
        break;
      case "sky":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/sky.css`));
        break;
      case "blood":
        setReqTheme(require(`../node_modules/reveal.js/css/theme/blood.css`));
        break;
      default:
        break;
    }
  }, [theme]);

  const [themeProvider, setThemeProvider] = useState("default");
  return (
    <>
      <Helmet>
        <noscript>{`
        <link rel="stylesheet" href={${reqTheme}} />
        <link rel="stylesheet" href={./Themes/override.css} />
      `}</noscript>
      </Helmet>
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <Deck>{Slides}</Deck>
        </DndProvider>
        <button
          type="button"
          className="add-position"
          onClick={() => {
            setShowAdd(true);
          }}
        >
          Add Slide
        </button>
        <button
          type="button"
          className="delete-position"
          onClick={() => {
            setShowDelete(true);
          }}
        >
          Delete Slide
        </button>
        <button
          type="button"
          className="theme-position"
          onClick={() => {
            setShowTheme(true);
          }}
        >
          Change Theme
        </button>
        <button
          type="button"
          className="detail-position"
          onClick={() => {
            setShowDetails(true);
          }}
        >
          Show Slide Details
        </button>
        <SlideThemeContext.Provider
          value={{
            theme: themeProvider,
            setThemeInContext: (abc) => {
              setThemeProvider(abc);
            }
          }}
        >
          {showAdd && <NewSlideForm setShowAdd={setShowAdd} />}
          {showDelete && <DeleteSlideForm setShowDelete={setShowDelete} />}
          {showTheme && (
            <ChangeThemeForm setShowTheme={setShowTheme} setTheme={setTheme} />
          )}
          {showDetails && <SlideDetails setShowDetails={setShowDetails} />}
        </SlideThemeContext.Provider>
      </div>
    </>
  );
};

export default App;

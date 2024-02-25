import { createContext, useState } from "react";

const SliderContext = createContext();

const SliderContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const articleData = [
    {
      articleId: 1,
      articleHeading: "",
      article: "",
    },
    {
      articleId: 2,
      articleHeading: "",
      article: "",
    },
    {
      articleId: 3,
      articleHeading: "",
      article: "",
    },
  ];

  const sharedValues = {
    articleData,
    currentIndex,
    setCurrentIndex: (val) => setCurrentIndex(val),
  };

  return (
    <SliderContext.Provider value={sharedValues}>
      {children}
    </SliderContext.Provider>
  );
};

export { SliderContext, SliderContextProvider };

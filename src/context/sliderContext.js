import { createContext, useState } from "react";

const SliderContext = createContext();

const SliderContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const articleData = [
    {
      id: 1,
      heading: "Discover innovative ways to decorate",
      article:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      id: 2,
      heading: "We are available all across the globe",
      article:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      id: 3,
      heading: "Manufactured with the best materials",
      article:
        "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
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

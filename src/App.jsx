import { SliderContextProvider } from "./context/sliderContext";

import Header from "./components/Header/Header";
import SlidingComponent from "./components/SlidingComponent";
const App = () => {
  return (
    <div className="app">
      <Header />
      <SliderContextProvider>
        <SlidingComponent />
      </SliderContextProvider>
    </div>
  );
};

export default App;

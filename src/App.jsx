import { SliderContextProvider } from "./context/sliderContext";

import Header from "./components/Header/Header";
import SlidingComponent from "./components/SlidingComponent";
import About from "./components/About";

import "./styles/App.scss"
const App = () => {
  return (
    <div className="app">
      <Header />
      <SliderContextProvider>
        <SlidingComponent />
      </SliderContextProvider>
      <About />
    </div>
  );
};

export default App;

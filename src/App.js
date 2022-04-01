import Birthday from "./components/1-BirthdayProject/Birthday";
import Tours from "./components/2-ToursProject/Tours";
import Reviews from "./components/3-ReviewsProject/Reviews";
import Accordian from "./components/4-AccordionProject/Accordian";
import Menu from "./components/5-MenuProject/Menu";

function App() {
  return (
    <>
      <h1 className="grand-title-h1">Projects</h1>
      <Menu />
      <Birthday />
      <Tours />
      <Reviews />
      <Accordian />
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing";
import Events from "./pages/Events";
import OurTeam from "./pages/OurTeam";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {<Route exact path="/" element={<Landing />} />}
          {<Route exact path="/events" element={<Events />} />}
          {<Route exact path="/our-team" element={<OurTeam />} />}
          {<Route exact path="/alumni" element={<Alumni />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Won from "./component/won";
import Run from "./component/runing";
import RunDetails from "./component/betDetails";
function App() {
  return (
      
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/run/:id" element={<Run/>} />
          <Route path="/won/:id" element={<Won/>} />
          <Route path="/create" element={<RunDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

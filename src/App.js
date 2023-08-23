import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./ScrollToTop"
import SingleProperty from "./Pages/SingleProperty";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproperty/:propertyID" element={<SingleProperty />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;

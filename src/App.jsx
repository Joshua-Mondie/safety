import "./App.css";
import AboutPages from "./pages/AboutPages";
import BranchesPage from "./pages/BranchesPage";
// import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NyscProgramme from "./pages/NyscProgramme";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/home" element={<HomePage />}></Route>
          {/* <Route path="/HomePage" element={<HomePage />}></Route> */}
          <Route path="/branches" element={<BranchesPage />}></Route>
          <Route path="/about" element={<AboutPages />}></Route>
          <Route
            path="/traning&certification"
            element={<NyscProgramme />}
          ></Route>
          <h1>hello</h1>
          {/* <Route path="landingpage">
          

          </Route> */}
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

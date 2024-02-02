// import "./App.css";
// import AboutPages from "./pages/AboutPages";
// import BranchesPage from "./pages/BranchesPage";
// import HomePage from "./pages/HomePage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NyscProgramme from "./pages/NyscProgramme";

// function App() {
//   return (
//     <>
//       {/* <div><HomePage/></div> */}

//       <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<HomePage />}></Route>
//           <Route path="/branches" element={<BranchesPage />}></Route>
//           <Route path="/about" element={<AboutPages />}></Route>
//           <Route
//             path="/traning&certification"
//             element={<NyscProgramme />}
//           ></Route>

//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

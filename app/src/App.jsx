import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import New from "../Pages/New";
import MainNavigation from "./Components/Layout/MainNavigation";


export default function App() {
  return (
    <div>
      <MainNavigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home'; // Import your page components
// import About from './About';
// import New from './New';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/new">New</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/new" element={<New />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

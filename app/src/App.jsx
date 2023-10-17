// import {Route} from 'react-router-dom' ;
// import Layout from "./Components/Layout/Layout";
// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import New from "../Pages/New";

import Home from "../Pages/Home";
import Footer from "./Components/Footer";
import MainNavigation from "./Components/Layout/MainNavigation";


// export default function App() {
//   return (
//     <div>
//       <Layout />

    
//         <Route path="/" exact>
//           <Home />
//         </Route>

//         <Route path="/about" exact>
//           <About />
//         </Route>

//         <Route path="/new">
//           <New />
//         </Route>
   
//     </div>
//   );
// }



export default function App() {
  return (
    <div>
     <MainNavigation />
    <Home/>
    <Footer />
    </div>
  )
}


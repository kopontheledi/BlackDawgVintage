import {Route, Switch} from 'react-router-dom' ;
import Layout from "./Components/Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import New from "../Pages/New";


export default function App() {
  return (
    <div>
      <Layout />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/new">
          <New />
        </Route>
      </Switch>
    </div>
  );
}

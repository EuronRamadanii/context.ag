import "./Assets/css/_App.scss";
import { Home, Career, Products } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Testimonials from "./pages/Testimonials/testimonials";
import JobDetails from "./components/Jobs/JobDetails";
import Apply from "./components/Jobs/Apply";
import SingleProduct from "./components/Products/SingleProduct";
import OrderProduct from "./components/Products/OrderProduct";
import Service1 from "./pages/Service/service_1";
import Service2 from "./pages/Service/service_2";
import Service3 from "./pages/Service/service_3";
import Service4 from "./pages/Service/service_4";
import Service5 from "./pages/Service/service_5";
import Service6 from "./pages/Service/service_6";
import Service7 from "./pages/Service/service_7";
import Portofolio from "./pages/Portofolio.js/Portofolio";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services/service-1">
            <Service1 />
          </Route>
          <Route exact path="/services/service-2">
            <Service2 />
          </Route>
          <Route exact path="/services/service-3">
            <Service3 />
          </Route>
          <Route exact path="/services/service-4">
            <Service4 />
          </Route>
          <Route exact path="/services/service-5">
            <Service5 />
          </Route>
          <Route exact path="/services/service-6">
            <Service6 />
          </Route>
          <Route exact path="/services/service-7">
            <Service7 />
          </Route>
          <Route exact path="/career">
            <Career />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/:name">
            <SingleProduct />
          </Route>
          <Route exact path="/order/:name">
            <OrderProduct />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
          <Route exact path="/jobDetails/:id">
            <JobDetails />
          </Route>
          <Route exact path="/apply">
            <Apply />
          </Route>
          {/* <Route exact path="/portofolio">
            <Portofolio />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

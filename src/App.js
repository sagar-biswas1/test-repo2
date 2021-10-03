import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import AllNews from "./pages/allNews/AllNews";
import Blogs from "./pages/blog/Blogs";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

export const MyContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/blog">
              <Blogs />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/news/:sourceId">
              <AllNews />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;

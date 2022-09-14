import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Modals from "./components/Modals";
import { useEffect, useState } from "react";
import ProductDetail from "./pages/ProductDetail";
import CategoryLanding from "./pages/CategoryLanding";

// npx json-server --watch data/db.json --port 8000

function App() {

  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistNumber, setWishlistNumber] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  const getters = { wishlistItems, wishlistNumber, cartItems, cartNumber }
  const setters = { setWishlistItems, setWishlistNumber, setCartItems, setCartNumber }

  useEffect(() => {
    fetch("http://localhost:8000/wishlist")
      .then(res => {
        if (!res.ok) {
          throw new Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        setWishlistItems(data)
        setWishlistNumber(data.length)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then(res => {
        if (!res.ok) {
          throw new Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        console.log("cart fetch")
        setCartItems(data)
        setCartNumber(data.length)
      })
  }, [])

  return (
    <Router>
      <div className="App">
        <Modals />
        {getters && setters && <Header getters={getters} setters={setters} />}
        <div className="content">
          <Switch>
            {getters && setters && <Route exact path='/'><Home getters={getters} setters={setters} /></Route>}
            <Route path="/pdp/:id"> <ProductDetail /> </Route>
            <Route path="/clp"> <CategoryLanding getters={getters} setters={setters} /> </Route>
          </Switch>
        </div>
        <div className="dummy-row"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

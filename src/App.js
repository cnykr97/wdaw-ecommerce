import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Modals from "./components/Modals";
import { useEffect, useState } from "react";

// npx json-server --watch data/db.json --port 8000

function App() {

  const [wishlistItems, setwishlistItems] = useState([]);
  const [wishlistNumber, setwishlistNumber] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  const getters = { wishlistItems, wishlistNumber, cartItems, cartNumber }
  const setters = { setwishlistItems, setwishlistNumber, setCartItems, setCartNumber }

  useEffect(() => {
    fetch("http://localhost:8000/wishlist")
      .then(res => {
        if (!res.ok) {
          throw new Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        console.log("wishlist fetch")
        setwishlistItems(data.items)
        setwishlistNumber(data.number)
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
        setCartItems(data.items)
        setCartNumber(data.number)
      })
  }, [])

  return (
    <Router>
      <div className="App">
        <Modals />
        {wishlistItems && cartItems && <Header getters={getters} setters={setters} />}
        <div className="content">
          <Switch>
            {wishlistItems && cartItems && <Route exact path='/'><Home getters={getters} setters={setters} /></Route>}
          </Switch>
        </div>
        <div className="dummy-row"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

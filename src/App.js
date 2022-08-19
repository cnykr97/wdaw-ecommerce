import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Modals from "./components/Modals";

// npx json-server --watch data/db.json --port 8000

function App() {
  return (
    <Router>
      <div className="App">
        <Modals />
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/'> <Home /></Route>
          </Switch>
        </div>
        <div className="dummy-row"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

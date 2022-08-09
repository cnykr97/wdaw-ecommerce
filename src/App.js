import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <div className="dummy-row"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

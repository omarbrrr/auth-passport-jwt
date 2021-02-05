import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
          </Switch> */}
      </div>
    </Router>
  );
}

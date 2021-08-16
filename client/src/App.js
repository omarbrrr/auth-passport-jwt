import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import PrivateRoute from './components/private-route/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
// Auth
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = './login';
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="relative w-screen h-screen font-body bg-gray-100">
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import PrivateRoute from './components/login/privateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Services from './components/services/Services';
import AuthProvider from './context/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

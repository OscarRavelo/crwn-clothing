import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from './components/header-component/header-component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user

      })
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){

    return (
      <div className="App">
    <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/" component={ShopPage} />
        <Route exact path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}
}

export default App;

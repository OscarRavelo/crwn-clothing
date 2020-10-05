import React from "react";
import { connect} from 'react-redux';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header-component/header-component";
import { setCurrentUser } from './redux/user/user.actions'
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  

  unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
        });
        
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);

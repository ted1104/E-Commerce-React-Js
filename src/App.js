import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePage from "./pages/homepage/HomePage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";
// const HomePage = (props) =>{
//   console.log(props);
//   return(
//     <div>
//       <h1>HOME PAGE</h1>
//       {/* DEUX MANIERES DE NAVIGUER SUR REACT */}
//       <Link to="/topics">Topics</Link>
//       <button onClick={()=>props.history.push('/topics')}>Topics</button>
//     </div>
//   );
// };

// const TopicList = (props) =>{
//   console.log(props);
//   return(
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`${props.match.url}/12`}>Detail #12</Link>
//       <Link to={`${props.match.url}/13`}>Detail #13</Link>
//       <Link to={`${props.match.url}/14`}>Detail #14</Link>
//     </div>
//   );
// };

// const TopicDetail = (props) =>{
//   console.log(props);
//   return(
//     <div>
//       <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
//     </div>
//   );
// };
// const HatsPage = (props) =>{
//   console.log(props);
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   )
// }
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsucribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsucribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);
      //this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // this.setState({ currentUser: userAuth });
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsucribeFromAuth();
  }

  render() {
    // console.log(this.props.currentUser);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          {/* <Route exact path="/signin" component={SignInAndSignUpPage} /> */}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          {/* <Route exact path='/blog/content/topics' component = {TopicList} />
        <Route exact path = '/blog/content/topics/:topicId' component = {TopicDetail} /> */}
        </Switch>
      </div>
    );
  }
}
//mapStateToProps : pour lire le global state et l'utiliser dans l'application
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// }); WITHOUT RESELECT

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
//mapDispatchToProps : pour executer les actions du reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

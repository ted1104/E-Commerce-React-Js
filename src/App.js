import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

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
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsucribeFromAuth = null;

  componentDidMount() {
    this.unsucribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsucribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          {/* <Route exact path='/blog/content/topics' component = {TopicList} />
        <Route exact path = '/blog/content/topics/:topicId' component = {TopicDetail} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;

import './App.css';
// import HomePage from './pages/homepage/HomePage.component'
import {Route, Link} from 'react-router-dom';

const HomePage = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>HOME PAGE</h1> 
      {/* DEUX MANIERES DE NAVIGUER SUR REACT */}
      <Link to="/topics">Topics</Link>
      <button onClick={()=>props.history.push('/topics')}>Topics</button>
    </div>
  );
};

const TopicList = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/12`}>Detail #12</Link>
      <Link to={`${props.match.url}/13`}>Detail #13</Link>
      <Link to={`${props.match.url}/14`}>Detail #14</Link>
    </div>
  );
};

const TopicDetail = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  
  return (
    <div className="App">
     
      <Route exact path='/' component={HomePage} />
      <Route exact path='/blog/content/topics' component = {TopicList} />
      <Route exact path = '/blog/content/topics/:topicId' component = {TopicDetail} />
  
    </div>
  );
}

export default App;

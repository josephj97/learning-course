import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greet/> */}
      {/* <Welcome/> */}
      <Hello name="Joseph"></Hello>
      {/* <Welcome name="Joseph" nickname="Joe"></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      <Inline></Inline>
    </div>
  );
}

export default App;

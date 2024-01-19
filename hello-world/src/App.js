import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Form />







      {/* <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}      
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */
      /* <Counter/> */
      /* <Greet name="Smith" role="Hero">
        <p>This is childern prop</p>
      </Greet>
      <Greet name="Michael">
        <button>Action</button>
      </Greet>
      <Greet name="Scott"/>
      {<Welcome name="Test" hero="TestHero">
        <p>Testing</p>
        </Welcome>
      } */
      /* {<Hello />} */}
    </div>
  );
}

export default App;

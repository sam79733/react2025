import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import TabButton from './components/TabButton';
import { data } from './data';
import { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Task from './components/Task';
import ChildComp from './components/ChildComp';
import OTPInput from './components/OTPInput';

function App() {
  let [tabContent, settabContent] = useState('Please select the tab see the detail.');
  let [selectedTopic, setSelectedTopic] = useState(null);
  let [progress, setProgress] = useState(0);
  let [tasks, setTasks] = useState(['add new task']);
  let [uiColor, setUiColor] = useState('s');
  let [otpInput, setOTPInput] = useState([0, 0, 0, 0, 0]);

  function getColor(color) {
    console.log(uiColor);
    setUiColor(color);
  }

  function handleSelect(tabName) {
    setSelectedTopic(tabName);
    let tabData = data.filter((x) => x.tabName == tabName);
    settabContent(tabData[0].info);
  }

  let progressValue = 0;
  //let tasks = ['Go to Gym', 'Bill Submission', 'Complete study', 'Solve DSA'];

  let addTask = function () {
    const textInput = document.querySelector('#txtTask');
    const title = textInput.value;
    if (title !== '') setTasks((previtems) => [...previtems, title]);
  };

  let enableProgressBar = function () {
    let progressInterval = setInterval(() => {
      progressValue = progressValue + 10;
      setProgress(progressValue);
      if (progressValue >= 100) {
        clearInterval(progressInterval);
      }
    }, 1000);
  };

  let generateTask = function () {};

  return (
    <div className="App">
      {/* <div className="parentDiv" style={{ background: uiColor }}></div>
      <ChildComp getColor={getColor}></ChildComp>
 */}
      <Header />
      {otpInput.map((v) => {
        return <OTPInput />;
      })}
      {/* <section>
        <div className="product-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>REACT 2025</h1>
        </div>
      </section> */}
      {/* <section id="example">
        <h1>Example</h1>
        <menu>
          <ul>
            <TabButton isActive={selectedTopic === 'AI'} onSelect={() => handleSelect('AI')}>
              Artificial Inteligence
            </TabButton>
            <TabButton isActive={selectedTopic === 'ML'} onSelect={() => handleSelect('ML')}>
              Machine Learning
            </TabButton>
            <TabButton isActive={selectedTopic === 'Cloud'} onSelect={() => handleSelect('Cloud')}>
              Cloud
            </TabButton>
            <TabButton isActive={selectedTopic === 'Data Science'} onSelect={() => handleSelect('Data Science')}>
              Data Science
            </TabButton>
          </ul>
        </menu>
        <p>{tabContent}</p>
      </section> */}

      {/* <section id="todo123">
        <div className="add-task">
          <input type="text" id="txtTask" />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="todo-container">
          {tasks.map((value) => (
            <Task title={value} />
          ))}
        </div>
      </section> */}

      {/* <section id="progress123">
        <button onClick={enableProgressBar}>Enable Progress Bar</button>
        <ProgressBar progress={progress}></ProgressBar>
      </section> */}
      <Footer />
    </div>
  );
}

export default App;

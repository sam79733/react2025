import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import TabButton from './components/TabButton';
import { data } from './data';
import { useState } from 'react';
function App() {
  let [tabContent, settabContent] = useState('Please select the tab see the detail.');
  let [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(tabName) {
    setSelectedTopic(tabName);
    let tabData = data.filter((x) => x.tabName == tabName);
    settabContent(tabData[0].info);
  }

  return (
    <div className="App">
      <Header />
      <section>
        <div className="product-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>REACT 2025</h1>
        </div>
      </section>
      <section id="example">
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
      </section>

      <Footer />
    </div>
  );
}

export default App;

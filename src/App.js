import Tabs from './components/Tabs/tabs';
import './App.css';
import Header from './components/Header/Header';
import AccordionDemo from './components/Accordion/Accordion';
function App() {
  return (
    <div className="App">
      <h1>React Custom Components</h1>
       <Header />     
       <AccordionDemo />    
       <h1>React Tabs</h1>
      <Tabs>
        <div title='Home'>Tab content for Home</div>
        <div title='About'>Tab content for About</div>
        <div title='Contact'> Tab content for  Contact</div>
        </Tabs>
    </div>
  );
}

export default App;

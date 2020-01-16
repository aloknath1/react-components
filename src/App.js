import React from 'react';
import Header from './components/Header/Header';
import AccordionDemo from './components/Accordion/Accordion';
import TabsDemo from './components/Tabs/Tabs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />     
      <AccordionDemo />    
      <TabsDemo />  
    </div>
  );
}

export default App;

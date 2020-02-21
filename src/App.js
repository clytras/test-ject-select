import React, { useState } from 'react';
import Select from 'react-select';

// import logo from './logo.svg';
import './App.css';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const options1 = [
  { value: '0', label: 'Chocolate' },
  { value: '1', label: 'Strawberry' },
  { value: '2', label: 'Vanilla' }
]

const options2 = [
  { value: '130', label: 'Orange' },
  { value: '131', label: 'Cherry' },
  { value: '132', label: 'Banana' }
]

function App() {
  const [select1Opt, setSelect1Opt] = useState();
  const [select2Opt, setSelect2Opt] = useState();

  function handleSelect1Change(event) {
    console.log('Select 1 onChange event', event.value);
    setSelect1Opt(event.value);
  }

  function handleSelect2Change(event) {
    console.log('Select 2 onChange event', event.value);
    setSelect2Opt(event.value);
  }

  return (
    <div className="App">
      <div className="selects">
        <Select options={options1} onChange={handleSelect1Change} />
        <Select options={options2} onChange={handleSelect2Change} />
      </div>

      <div className="results">
        <p>Select 1 selected: <strong>{select1Opt}</strong></p>
        <p>Select 1 selected: <strong>{select2Opt}</strong></p>
      </div>
    </div>
  );
}

export default App;

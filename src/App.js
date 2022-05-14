import './App.css';
import { useState } from 'react';

const quotes = [
  "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
  "Conceal Your Intentions",
  "So Much Depends on Reputation – Guard It With Your Life",
  "Make Other People Come to You – Use Bait if Necessary",
  "Win Through Your Actions, Never Through Argument",
  "Infection: Avoid the Unhappy and the Unlucky",
  "Crush Your Enemy Totally",
  "Know Who You’re Dealing With – Don’t Offend the Wrong Person"
];

function App() {

 const [counter, setCounter] = useState(7);;

  return (
    <div onClick={(event) => setCounter(counter + 1)} className="App">
      {quotes[counter % quotes.length]}
    </div>
  );
}

export default App;

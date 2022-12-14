import './App.css';
import { useState } from 'react';

import Search from './Search.js';
import Results from './Results.js';

function App() {

  // create a piece of state that will reference the user input.
  const [exercises, setExercises] = useState([]);

  return (
    <div className="App">
      <h1>Project 3: Gif me some exercises!</h1>
          <Search 
            setExercises={setExercises}
          />

          <Results
            exercises={exercises}
            setExercises={setExercises}
          />
    </div>
  );
}

export default App;




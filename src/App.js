import React from 'react';
import logo from './logo.svg';
import './App.css';
import Master from './components/Master';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Habit Tracker</h1>
      </header>

      <main>

        <Master />
      </main>
    </div>
  );
}

export default App;

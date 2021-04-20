import React from 'react';


import './App.css';
import NavBar from './NavBar';
import SubjectsContainer from './SubjectsContainer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            WORDSMITH
          </p>

            <NavBar />

              
        </header>

              <div className="app-container">

                <SubjectsContainer />

              </div>


      </div>
      
    );
  }
}

export default App;

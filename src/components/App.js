import React from 'react';
// import Routes from './Routes.js';


import './App.css';
import NavBar from './NavBar';
import SubjectsContainer from './SubjectsContainer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            WORDSMITH
          </p>

            <NavBar />

              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
        </header>

              <div className="app-container">

                <SubjectsContainer />
              {/* <Routes /> */}

              </div>


      </div>
      
    );
  }
}

export default App;

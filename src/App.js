import React from 'react';
import { NavBar, MainPage, ProjectsPage } from './Components';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { darkTheme } from './theme/theme';
import './App.css';
// import { Typography } from '@material-ui/core';

function App() {
  return (
    <>
      <div className="App">
        <MuiThemeProvider theme={darkTheme}>
          {/* <CssBaseline /> */}
          <NavBar />
          <main>
            <MainPage />
            <ProjectsPage />
          </main>
        </MuiThemeProvider>
      </div>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import Calendar from '../Calendar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <main className="App-intro">
            <Calendar />
          </main>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Calendar from '../Calendar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                GAP on dates
              </Typography>
            </Toolbar>
          </AppBar>
          <main className="App-intro">
            <Calendar />
          </main>
        </div>
    );
  }
}

export default App;

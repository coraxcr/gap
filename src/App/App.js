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
        <div>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                GAP
              </Typography>
            </Toolbar>
          </AppBar>
          <main style = {{position: 'relative', top:"66px"}}>
            <Calendar />
          </main>
        </div>
    );
  }
}

export default App;

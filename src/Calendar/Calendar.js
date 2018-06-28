import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPickerRangeController } from 'react-dates';

class Calendar extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
        focusedInput: 'startDate',
      };
    }
  
    render() {
      return (
        <div className="App">
          <DayPickerRangeController
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths = {2}
          />
        </div>
      );
    }
  }

export default Calendar;
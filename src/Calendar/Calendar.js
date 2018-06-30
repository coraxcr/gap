import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import  moment from  "moment";
import { DayPickerRangeController } from 'react-dates';
import './react_dates_overrides.css'

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
            isDayBlocked = {(day) => true}
            startDate={this.props.startDay} 
            endDate={moment(this.props.startDay).add(this.props.numberOfDays - 1, 'days')} 
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}} 
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} 
            numberOfMonths = {this.props.months}
            initialVisibleMonth ={() => this.props.startDay}
            isDayHighlighted = {(toEvaluate) => {
              const month = toEvaluate.format('MM');
              const day = toEvaluate.format('DD');
              if(!!this.props.holidays){
                //TODO: Change of API, this code is only for demo. Not for production enviroments. No all days match.
                try{
                  const holiday = this.props.holidays.holidays[this.props.country].days[`${month}-${day}`];
                  if(holiday)
                    return true;
                }catch(e){
                  console.log(e);
                }
              }
              return false
            }}
            withPortal = {false}
          />
        </div>
      );
    }
  }

export default Calendar;
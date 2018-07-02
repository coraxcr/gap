import React, { Component } from 'react';
import Inputs from './Inputs';
import Calendar from './Calendar';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import  moment from  "moment";

class Form extends Component {
    
    state = {

        startDay : moment('2008-08-15'),
        numberOfDays : 17,
        country : "CR",
        months: this.getMonths(moment('2008-08-15'), 17),
        holidays: null,
        key : false
    }

    getMonths(startDay, numberOfDays){
        const endDay = (moment(startDay).add(numberOfDays - 1, 'days'));
        return (startDay.month() !== endDay.month() ||
               startDay.year() !== endDay.year()) ? 2 : 1;
    }

    async componentDidMount() {
        const holidaysUrl = 'https://raw.githubusercontent.com/commenthol/date-holidays/master/data/holidays.json';
        const response = await fetch(holidaysUrl);
        const holidays = await response.json();
        this.setState({ holidays });
    }

    onSubmit(event){
        event.preventDefault();
                
        const startDay = document.getElementById("startDate").value;  
        const numberOfDays = document.getElementById("numberOfdays").value; 
        const country = document.getElementById("countryCode").value; 

        this.setState((prevState) => {return {
            startDay : moment(startDay),
            numberOfDays,
            country,
            months: this.getMonths(moment(startDay), numberOfDays),
            key: !prevState.key}
        })
    }

    render() {
        return( 
            <div>
                <br/>
                <Grid container  spacing={0} >
                    <Grid item xs={false} md={4} lg={4}></Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <FormControl component="fieldset">
                            <div style = {{color: 'red', width:"619px" }}></div>
                            <FormLabel component="legend">And now you can see holidays</FormLabel>
                            <FormControl component="form" onSubmit={(event) => this.onSubmit(event)}>
                                <br/>
                                <Inputs 
                                setStartDate = { (e) => this.setStartDate(e) } 
                                setStartNumberOfDays = { (e) => this.setStartNumberOfDays(e) } 
                                setStartCountry = { (e) => this.setStartCountry(e) } 
                                { ...this.state }/>
                            </FormControl>
                            <br/><br/>
                            <Calendar key = { this.state.key } { ...this.state } /> 
                            <br/>
                            <FormHelperText></FormHelperText>  
                        </FormControl>
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default Form ;
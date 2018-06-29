import React, { Component } from 'react';
import  Inputs from './Inputs';
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
        months: this.getMonths(moment('2008-08-15'), 17)
    }

    setStartDate(event){
        this.setState({ startDay :  moment(event.target.value), key :  event.target.value });
    }

    setStartNumberOfDays(event){
        this.setState({ numberOfDays : event.target.value });
        console.log(event.target.value);
        this.updateMonths(this.state.startDay, event.target.value);
    }

    setStartCountry(event){
        this.setState({ country : event.target.value });
    }
    
    onSubmit(event){
        event.preventDefault();
    }

    updateMonths(startDay, numberOfDays){
        const months = this.getMonths(startDay, numberOfDays);
        this.setState({ months : months});
    }

    getMonths(startDay, numberOfDays){
        return startDay.month() != (moment(startDay).add(numberOfDays - 1, 'days')).month() ? 2 : 1;
    }

    render() {
        return( 
            <div>
                <br/>
                <Grid container  spacing={0} >
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">And now you can choose</FormLabel>
                            <FormControl component="form" onSubmit={(event) => this.onSubmit(event)}>
                                <br/>
                                <Inputs 
                                setStartDate = { (e) => this.setStartDate(e) } 
                                setStartNumberOfDays = { (e) => this.setStartNumberOfDays(e) } 
                                setStartCountry = { (e) => this.setStartCountry(e) } 
                                { ...this.state }/>
                            </FormControl>
                            <br/><br/>
                            <Calendar key = { this.state.startDay } { ...this.state } /> 
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
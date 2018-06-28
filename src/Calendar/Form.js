import React, { Component } from 'react';
import  Inputs from './Inputs';
import Calendar from './Calendar';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';


class Form extends Component {
    
    state = {

        startDay : new Date(),
        numberOfDays : 3,
        country : "CR"

    }

    setStartDate(event){

        this.setState({ startDay :  new Date(event.target.value) });
        
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
                            <FormControl component="form">
                                <br/>
                                <Inputs setStartDate = { (e) => this.setStartDate(e) } { ...this.state }/>
                                <br/><br/>
                                <Calendar /> 
                                <br/>
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </FormControl>
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default Form ;
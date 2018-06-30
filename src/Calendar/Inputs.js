import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Countries from './Countries';
import  moment from  "moment";
import Button from '@material-ui/core/Button';
  
const Inputs = (props) => {
    return (
        <Grid container alignContent = {"flex-end"}  spacing={8}>
            <Grid item xs={4}>
                <TextField
                    id="startDate"
                    label="Start date"
                    fullWidth={true}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue = { props.startDay.format("YYYY-MM-DD")  }
                    inputProps = { { min: "0001-01-01", required : "true"} }
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="numberOfdays"
                    label="Number of days"
                    type="number"
                    fullWidth={true}
                    inputProps = { { min:0, max: 10000000,required : "true"} }
                    defaultValue = { props.numberOfDays }
                    onFocus = {(event) => event.target.select()}
                />
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="countryCode">Country</InputLabel>
                    <NativeSelect
                        input={<Input name="countryCode" id="countryCode" />}
                        defaultValue = { props.country } 
                    >
                        () => { Countries.map(country => <option key={country.code} value={country.code}>{country.code}</option>)}

                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <br/>
                <Button variant="contained" color="primary" type="submit" fullWidth={true}>
                    Display
                </Button>
            </Grid>
            
        </Grid>
    );
}  

export default Inputs;
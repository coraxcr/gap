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
        <Grid container xs={12} alignContent = {"flex-end"}  spacing={8}>
            <Grid item xs={4}>
                <TextField
                    id="startDate"
                    label="Start date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue = { props.startDay.format("YYYY-MM-DD")  }
                    onBlur = {(event) =>  props.setStartDate(event) }
                    inputProps = { { min: "0001-01-01"} }
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="numberOfdays"
                    label="Number of days"
                    type="number"
                    inputProps = { { min:0} }
                    defaultValue = { props.numberOfDays }
                    onInput = {(event) =>  props.setStartNumberOfDays(event) }
                    onFocus = {(event) => event.target.select()}
                />
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="countryCode">Country</InputLabel>
                    <NativeSelect
                        input={<Input name="countryCode" id="countryCode" />}
                        value = { props.country } 
                        onChange = {(event) =>  props.setStartCountry(event) }
                    >
                        () => { Countries.map(country => <option key={country.code} value={country.code}>{country.code}</option>)}

                    </NativeSelect>
                </FormControl>
            </Grid>
            {/*<Grid item xs={2}>
                <br/>
                <Button variant="contained" color="primary" type="submit">
                    Display
                </Button>
            </Grid>
            */}
        </Grid>
    );
}  

export default Inputs;
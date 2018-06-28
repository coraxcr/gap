import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IntegrationDownshift from './AutoComplete';
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
        <Grid container  spacing={0}>
            <Grid item xs={4}>
                <TextField
                    id="startDate"
                    label="Start date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue = { moment(props.startDay).format("YYYY-MM-DD")  }
                    onBlur = {(event) =>  props.setStartDate(event) }
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="numberOfdays"
                    label="Number of days"
                    type="number"
                    inputProps = { { min:0} }
                    defaultValue = { props.numberOfDays }
                />
            </Grid>
            <Grid item xs={2}>
                <FormControl>
                    <InputLabel htmlFor="countryCode">Country</InputLabel>
                    <NativeSelect
                        input={<Input name="countryCode" id="countryCode" />}
                        value = { props.country } 
                    >
                        () => { Countries.map(country => <option key={country.code} value={country.code}>{country.code}</option>)}

                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs="2">
                <br/>
                <Button variant="contained" color="primary" fullWidth="true">
                    Render
                </Button>
            </Grid>
        </Grid>
    );
}  

export default Inputs;
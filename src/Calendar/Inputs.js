import React from 'react';
import TextField from '@material-ui/core/TextField';
import IntegrationDownshift from './AutoComplete';
import Grid from '@material-ui/core/Grid';
  
const Inputs = (props) => {
    return (
    
        <Grid container  spacing={12}>
            <Grid item xs={4}>
                <TextField
                    id="startDate"
                    label="Start date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="numberOfdays"
                    label="Number of days"
                    type="number"
                />
            </Grid>
            <Grid item xs={4}>
                <IntegrationDownshift />
            </Grid>
        </Grid>
    );
}  

export default Inputs;
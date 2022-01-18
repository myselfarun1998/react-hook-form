import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel, makeStyles } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { multiStepContext } from '../StepContext';

const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <TextField
        label="country"
        value={userData['country']}
        onChange={(e) => setUserData({ ...userData, country: e.target.value })}
      />
      {/* <div>
        <TextField
          label="City"
          margin="nomal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="nomal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Address"
          margin="nomal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Pincode"
          margin="nomal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Gender"
          margin="nomal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl> */}

      <div>
        <button
          variant="contained"
          onClick={() => setStep(2)}
          color="secondary"
        >
          Previous
        </button>{' '}
        <span></span>
        <button variant="contained" onClick={submitData} color="primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default ThirdStep;

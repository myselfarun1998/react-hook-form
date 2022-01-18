import React, { useState, useContext } from 'react';

import { Button, TextField } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel, makeStyles } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { multiStepContext } from '../StepContext';

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [myCourse, setmyCourse] = useState('Java');

  return (
    <div>
      <TextField
        label="district"
        value={userData['district']}
        onChange={(e) => setUserData({ ...userData, district: e.target.value })}
      />

      {/* <div id="demo-radio-buttons-group-label">
        <div
          className="radio-btn"
          onClick={() => {
            setmyCourse("Java");
          }}
        >
          <input
            type="radio"
            value={myCourse}
            name="myCourse"
            checked={myCourse == "Java"}
          />
          Java
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setmyCourse("C");
          }}
        >
          <input
            type="radio"
            value={myCourse}
            name="myCourse"
            checked={myCourse == "C"}
          />
          C
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setmyCourse("ASP");
          }}
        >
          <input
            type="radio"
            value={myCourse}
            name="myCourse"
            checked={myCourse == "ASP"}
          />
          ASP
        </div>
      </div>

      <div>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                Your Selected Course is{" "}
              </InputAdornment>
            ),
          }}
          value={myCourse}
        />
      </div> */}

      <div>
        <button
          variant="contained"
          onClick={() => setStep(1)}
          color="secondary"
        >
          {' '}
          previous{' '}
        </button>
        <button variant="contained" onClick={() => setStep(3)} color="primary">
          {' '}
          Next{' '}
        </button>{' '}
        <span></span>
      </div>
    </div>
  );
};

export default SecondStep;

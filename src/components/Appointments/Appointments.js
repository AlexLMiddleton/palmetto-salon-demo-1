import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import "./Appointments.css";

const useStyles = makeStyles(theme => ({
  services: {
    margin: theme.spacing(1),
    minWidth: 300,
    textAlign: "left"
  },
  textfield: {
    minWidth: 300
  },
  formSubmitButton: {
    minWidth: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AppointmentsForm = () => {
  const [days, setDays] = useState([]);
  const [appointment, setAppointment] = useState("");

  const handleChange = day => event => {
    if (days.indexOf(day) === -1) {
      setDays(days.concat(day));
    } else {
      setDays(days.filter(d => d !== day));
    }
  };

  const setAppointmentType = event => {
    setAppointment(event.target.value);
  };

  const classes = useStyles();
  return (
    <div className="appointment-container">
      <form>
        <h1>Request an Appointment</h1>
        <p>
          Please fill out the section below. We'll call you at our earliest
          convenience and schedule an appointment date and time.
        </p>
        <div>
          <TextField
            required
            className={classes.textfield}
            id="standard-required"
            label="Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            required
            className={classes.textfield}
            id="standard-required"
            label="Phone Number"
            defaultValue=""
          />
        </div>
        <div>
          <FormControl variant="filled" className={classes.services}>
            <InputLabel id="demo-simple-select-filled-label">
              Choose an Appointment Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={appointment}
              onChange={setAppointmentType}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="haircut">Haircut - $64</MenuItem>
              <MenuItem value="shampoo-and-style">
                Shampoo and Style - $50
              </MenuItem>
              <MenuItem value="highlights">Highlights - $125</MenuItem>
              <MenuItem value="highlights-and-cut">
                Cut and Highlights - $150
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <p>Choose your availability:</p>
        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Monday A.M.")}
                    value="Monday A.M."
                  />
                }
                label="Monday A.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Monday P.M.")}
                    value="Monday P.M."
                  />
                }
                label="Monday P.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Tuesday A.M.")}
                    value="Tuesday A.M."
                  />
                }
                label="Tuesday A.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Tuesday P.M.")}
                    value="Tuesday P.M."
                  />
                }
                label="Tuesday P.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Wednesday A.M.")}
                    value="Wednesday A.M."
                  />
                }
                label="Wednesday A.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Wednesday P.M.")}
                    value="Wednesday P.M."
                  />
                }
                label="Wednesday P.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Thursday A.M.")}
                    value="Thursday A.M."
                  />
                }
                label="Thursday A.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Thursday P.M.")}
                    value="Thursday P.M."
                  />
                }
                label="Thursday P.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Friday A.M.")}
                    value="Friday A.M."
                  />
                }
                label="Friday A.M."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange("Friday P.M.")}
                    value="Friday P.M."
                  />
                }
                label="Friday P.M."
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={classes.formSubmitButton}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "darkblue",
              color: "white",
              minWidth: "30%",
              marginTop: "1em",
              marginBottom: "1em",
              fontWeight: 500
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentsForm;

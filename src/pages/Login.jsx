import React, { useState } from 'react';
import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from 'notistack';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth';

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let navigate = useNavigate();

  const [form, setForm] = useState({
    email: { value: "" },
    password: { value: "" }
  });

  const handleChange = (e) => {
    let _form = { ...form };
    _form[e.target.name].value = e.target.value;
    setForm(_form);
  }

  const submitForm = async (e) => {
    e.preventDefault();

    if (form.email.value && form.password.value) {
      setProcessing(true);

      try {
        let data = await AuthService.login(form.email.value, form.password.value);
        if (data.status) {
          setProcessing(false); navigate(`/`);
          enqueueSnackbar(data.message, { variant: "success", autoHideDuration: '3s' });
        } else {
          setProcessing(false);
          enqueueSnackbar(data.message, { variant: "error", autoHideDuration: '3s' });
        }
      }
      catch (e) {
        console.log("e",e);
        setProcessing(false);
        enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: '3s' });
      }
    } else {
      enqueueSnackbar("All fields are required.", { variant: "error", autoHideDuration: '3s' });
    }

  }

  return (
    <Grid container className="page-container">
      <Grid item md={4} sm={6} xs={11} className="page-block">
        <span className="page-heading"> Login </span>
        <form className="mb-4" onSubmit={submitForm}>
          <TextField variant="standard" margin="normal" fullWidth
            label="Email Address" name="email" autoFocus 
            value={form.email.value} onChange={handleChange}
            />
          <TextField variant="standard" margin="normal"
            label="Password*" type={passwordVisibility ? "text" : "password"} fullWidth name="password"
            value={form.password.value} onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" tabIndex="-1"
                    onClick={e => setPasswordVisibility(!passwordVisibility)} >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth disabled={processing} variant="contained" color="primary" > {processing ? "Processing..." : "Log In"} </Button>
          <p>
            <NavLink to={'/register'}>Create new account</NavLink>
          </p>

        </form>
      </Grid>
    </Grid>)
}

export default Login;
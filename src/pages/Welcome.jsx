
import { PowerSettingsNew } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth';

const Welcome = () => {

  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let navigate = useNavigate();

  useEffect(() => {
    AuthService.getProfile().then(user => {
      if (user) {
        setName(user.displayName);
      }
    });
  }, []);

  const logout = async () => {
    setProcessing(true);

    try {
      let data = await AuthService.logout();
      if (data.status) {
        setProcessing(false); navigate(`/login`);
        enqueueSnackbar(data.message, { variant: "success", autoHideDuration: '3s' });
      } else {
        setProcessing(false);
      }
    }
    catch (e) {
      setProcessing(false);
      enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: '3s' });
    }
  }

  return (
    <Grid container className="page-container">
      <Grid item md={4} sm={6} xs={11} className="page-block">
        <p className="page-heading">
          Welcome
          <br />
          <span>{name}...</span>
        </p>
        <br />
        <Button variant="contained" color='error' disabled={processing} onClick={logout}>
          <PowerSettingsNew /> &nbsp; {processing ? "Processing...." : "Logout"}
        </Button>
      </Grid>
    </Grid>)

}

export default Welcome;
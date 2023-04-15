import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth';

const AuthGuard = ({ component }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, [component]);

  const checkToken = async () => {
    try {
      let user = await AuthService.getProfile(true);
      if (!user) {
        navigate(`/login`);
      }
      setStatus(true);
      return;
    } catch (error) {
      navigate(`/login`);
    }
  }

  return status ? <React.Fragment>{component}</React.Fragment> : <React.Fragment></React.Fragment>;
}

export default AuthGuard;
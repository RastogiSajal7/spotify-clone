import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/tokenSlice';
import { getTokenFromUrl, loginUrl } from '../../utils/auth';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch(setToken(_token));
    }
  }, [dispatch]);

  return (
    <div className="login">
      <h1>Spotify Clone</h1>
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;

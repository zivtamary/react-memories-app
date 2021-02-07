import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextInput from 'components/Auth/TextInput';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { AUTH } from 'redux/actions/auth/actions';
import { useHistory } from 'react-router-dom';
import { signin, signup } from 'redux/actions/auth';
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((state) => !state);
    handleShowPassword(false);
  };
  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  const googleFailure = () => {
    console.error('google sign in failed');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <TextInput
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <TextInput
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <TextInput
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <TextInput
              name='password'
              label='Password'
              handleChange={handleChange}
              type='password'
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <TextInput
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId='541041151890-kh1hqn8jf9ng22ra9b0n6s628u17qkk6.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'>
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign in'
                  : 'Don\t have an account? Sign up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

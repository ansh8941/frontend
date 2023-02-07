import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/Iconify';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authActions } from '../authSlice';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loading, token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/profile', { replace: true });
    }
  }, [token]);

  const LoginSchema = Yup.object().shape({
    //email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: false,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      const { username, password } = values;
      dispatch(authActions.login({ username, password }));
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          autoComplete="username"
          type="text"
          label="Username"
          {...getFieldProps('username')}
          error={Boolean(touched.username && errors.username)}
          helperText={touched.username && errors.username}
        />

        <TextField
          fullWidth
          autoComplete="current-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          {...getFieldProps('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
          label="Remember me"
        />

        <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading || isSubmitting}>
        Login
      </LoadingButton>
    </form>
  );
}

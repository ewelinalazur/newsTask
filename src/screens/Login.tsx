import React, { useState } from 'react';
import { Platform } from 'react-native';

import CustomSpinner from '../components/CustomSpinner';
import Login from '../components/Login';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RootState } from '../state/store';
import { loginUser } from '../state/user/UserSlice';

const LoginScreen = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state: RootState) => state.userLogin.loading);
  const error = useAppSelector((state: RootState) => state.userLogin.error);

  const onChange = ({ name, value }: any) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    if (form.username && form.password) {
      const userData = {
        username: form.username,
        password: form.password,
      };
      dispatch(loginUser(userData));
    }
  };

  return (
    <>
      {loading && Platform.OS !== 'ios' && <CustomSpinner />}
      <Login
        onSubmit={() => onSubmit()}
        onChange={onChange}
        form={form}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default LoginScreen;

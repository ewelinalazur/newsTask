import React, {useEffect, useState} from 'react';
import Login from '../components/Login';
import {loginUser, setDataLogin} from '../state/user/UserSlice';
import CustomSpinner from '../components/CustomSpinner';
import {useAppDispatch, useAppSelector} from '../state/hooks';
import {RootState} from '../state/store';
import {Platform} from 'react-native';
import {NEWS} from "../constants/routeName";
import {useNavigation} from "@react-navigation/native";
import {NavigationInterface} from "../components/types";

const LoginScreen = () => {
  const [form, setForm] = useState({username: 'rekrutacja@emplo.com', password: 'sde4355tygswJ5t%eDX'});
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationInterface>();

  const loading = useAppSelector((state: RootState) => state.userLogin.loading);
  const error = useAppSelector((state: RootState) => state.userLogin.error);

  const onChange = ({name, value}: any) => {
    setForm({...form, [name]: value});
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
      <Login onSubmit={() => onSubmit()} onChange={onChange} form={form} error={error} loading={loading} />
    </>
  );
};

export default LoginScreen;

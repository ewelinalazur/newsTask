import React, {useEffect} from "react";
import styled from "@emotion/native";
import {getData} from "../state/data/DataSlice";
import {useAppDispatch, useAppSelector} from "../state/hooks";
import {TouchableOpacity, Text, FlatList} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setSignedOutStatus} from '../state/user/UserSlice';
import CustomSpinner from "../components/CustomSpinner";
const StyledContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

const  News = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userLogin.isLoggedIn);
  const isFetchingData = useAppSelector((state) => state.getData.isFetchingData);

  const newsData = useAppSelector((state) => state.getData.data);
  const ItemView = ({item, index}) => {
    return (

            <Text>
              {item.title}
            </Text>
    );
  };
  const handleLogout = async () => {
    await AsyncStorage.clear()
      .then(() => {
        dispatch(setSignedOutStatus(false));
      })
      .then(() => {
        AsyncStorage.setItem('firstLoading', JSON.stringify(true));
      });
  };
  useEffect(() => {
    if (!isFetchingData) console.log(newsData)
  }, [isFetchingData])
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getData());
    }
  }, [isLoggedIn])
  return <StyledContainer>
    {isFetchingData ? (
<CustomSpinner />
    ) : (
<FlatList data={newsData} keyExtractor={(item, index) => index.toString()} renderItem={ItemView} />
      )
    }
    <TouchableOpacity onPress={handleLogout}>
      <Text>{'Wyloguj'}</Text>

    </TouchableOpacity>
  </StyledContainer>;
}
export default News;

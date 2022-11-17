import styled from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, Platform, View } from 'react-native';

import Button from '../components/Buttom';
import Comments from '../components/Comments';
import ContentHtml from '../components/ContentHtml';
import CustomSpinner from '../components/CustomSpinner';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setSignedOutStatus } from '../state/user/UserSlice';

const StyledLockerInfoFrameWrapper = styled.TouchableOpacity`
  width: 100%;
  border-style: solid;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-left-width: 2px;
  border-top-width: 2px;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
`;

const StyledFlatlist = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

const StyledContainer = styled.View`
  //flex: 1;
  width: 100%;
`;
const StyledHeader = styled.View`
  flex-direction: row;
  margin: 0 10px;
`;

const StyledLockerContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledLockerInfoWrapper = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StyledIcon = styled.View`
  position: absolute;
  right: 5px;
  top: 10px;
  flex-direction: row;
`;
const CommentBar = styled.TouchableOpacity`
  width: 100%;
  height: 38px;
  padding: 0 15px;
  display: flex;
  border-color: black;
  border-top-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0 0 8px 8px;
`;

const CommentText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  padding-right: 15px;
`;

const StyledLockerName = styled.Text`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: black;
  width: 85%;
  margin: 10px 0;
`;
const StyledNumberLikes = styled.Text`
  font-size: 14px;
  margin-right: 2px;
  line-height: 26px;
`;
const StyledAuthorWrapper = styled.View`
  margin: 0 10px 10px;
  font-size: 16px;
`;
const StyledDate = styled.Text`
  margin: 5px 10px 10px;
  font-size: 12px;
`;

const News = () => {
  const dispatch = useAppDispatch();
  const isFetchingData = useAppSelector((state) => state.getData.isFetchingData);
  const newsData = useAppSelector((state) => state.getData.data);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = (commentsLength: number) => {
    if (commentsLength > 0) {
      setModalVisible(!modalVisible);
    }
  };
  const handleLogout = async () => {
    await AsyncStorage.clear().then(() => {
      dispatch(setSignedOutStatus(false));
    });
  };

  const ItemView = ({ item, index }) => {
    const date = new Date(item.createDate).getDate();
    const month = new Date(item.createDate).getMonth() + 1;
    const year = new Date(item.createDate).getFullYear();

    return (
      <>
        <StyledLockerInfoFrameWrapper
          key={item.id}
          onPress={() => toggleModal(item.comments.length)}>
          <StyledLockerContentWrapper>
            <StyledLockerInfoWrapper>
              <StyledHeader>
                <StyledLockerName>{item.title}</StyledLockerName>
                <StyledIcon>
                  <StyledNumberLikes>{item.numberOfLikes}</StyledNumberLikes>
                  <Icon name="heart-circle" type="ionicon" color="#232f5f" />
                </StyledIcon>
              </StyledHeader>
              <StyledAuthorWrapper>
                <Text>autor: {item.author.fullName}</Text>
              </StyledAuthorWrapper>
              <ContentHtml content={item.content} />
              <StyledDate>opublikowano: {date + '/' + month + '/' + year}</StyledDate>
            </StyledLockerInfoWrapper>
          </StyledLockerContentWrapper>
          <CommentBar onPress={() => toggleModal(item.comments.length)}>
            <View>
              <Icon name="chatbubbles" type="ionicon" color="#232f5f" />
            </View>
            <CommentText>
              {item.comments.length}{' '}
              {item.comments.length > 1
                ? 'komentarze'
                : item.comments.length < 1
                ? 'komenatrzy'
                : 'komentarz'}{' '}
            </CommentText>
          </CommentBar>
          {modalVisible && <Comments comments={item.comments} />}
        </StyledLockerInfoFrameWrapper>
        {newsData.length - 1 === index && <Button onPress={handleLogout} title="Wyloguj" />}
      </>
    );
  };

  return (
    <StyledContainer>
      {isFetchingData && Platform.OS !== 'ios' ? (
        <CustomSpinner />
      ) : (
        <StyledFlatlist
          data={newsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      )}
    </StyledContainer>
  );
};

export default News;

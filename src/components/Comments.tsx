import styled from '@emotion/native';
import React from 'react';

import ContentHtml from '../components/ContentHtml';
import { ArrayComment } from '../state/data/DataSlice';

const StyledCommentWrapper = styled.View`
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #232f5f;
  margin: 0 10px 10px;
  padding: 10px;
`;
const StyledComment = styled.Text`
  margin-left: 10px;
  margin-bottom: 5px;
`;
const Comments = ({ comments }) => {
  return (
    <>
      {comments?.map((comment: ArrayComment) => {
        return (
          <StyledCommentWrapper key={comment.id}>
            <StyledComment>{comment.author.fullName}</StyledComment>
            <ContentHtml content={comment.content} />
          </StyledCommentWrapper>
        );
      })}
    </>
  );
};
export default Comments;

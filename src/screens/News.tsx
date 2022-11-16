import React, {useEffect} from "react";
import styled from "@emotion/native";
import {dataSlice, getData} from "../state/data/DataSlice";
import {useAppDispatch} from "../state/hooks";

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

const  News = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [])
  return <StyledContainer></StyledContainer>;
}
export default News;

import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const ContentHtml = React.memo(function ContentHtml({ content }) {
  const { width } = useWindowDimensions();
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray',
      marginLeft: '10px',
    },
    a: {
      color: 'gray',
      textDecorationLine: 'none',
    },
    p: {
      marginTop: '1px',
    },
    ul: {
      listStyleType: 'none',
      marginLeft: '-10px',
    },
    li: {
      marginTop: '0',
      marginBottom: '2px',
    },
    img: {
      width: 100,
      height: 100,
    },
  };

  return <RenderHTML tagsStyles={tagsStyles} contentWidth={width} source={{ html: content }} />;
});
export default ContentHtml;

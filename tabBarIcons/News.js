import React from 'react';
import Svg, {Path} from 'react-native-svg';
import { IconContainer } from '../components/styles';


const News = () => {
    return(
      <IconContainer>
        <Svg
        width={24}
        height={24}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </Svg>
    </IconContainer>
    );
}

export default News;
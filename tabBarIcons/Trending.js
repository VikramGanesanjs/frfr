import React from 'react';
import Svg, {Path} from 'react-native-svg';
import { IconContainer } from '../components/styles';


const Trending = () => {
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
        <Path d="M23 6l-9.5 9.5-5-5L1 18" />
        <Path d="M17 6h6v6" />
    </Svg>
    </IconContainer>
    );
}

export default Trending;
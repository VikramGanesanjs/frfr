import React from 'react';
 
import { IconContainer } from "../components/styles"
import Svg, {Path, Circle} from 'react-native-svg';
const Search = () => {
    return(
        <IconContainer>
            <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
      
            >
            <Circle cx={11} cy={11} r={8} />
            <Path d="M21 21L16.65 16.65" />
            </Svg>

        </IconContainer>

    )

}

export default Search;
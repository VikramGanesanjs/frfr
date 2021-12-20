import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import { IconContainer } from '../components/styles';


const Account = () => {
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
          className="feather feather-user"
        >
          <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <Circle cx={12} cy={7} r={4} />
        </Svg>
    </IconContainer>
    );
}

export default Account;
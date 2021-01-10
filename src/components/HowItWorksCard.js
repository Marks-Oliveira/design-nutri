import React from 'react';

import * as S from './styles';

const HowItWorksCard = (props) => {
  return (
    <S.WorkCardWrapper>
      
      <S.WorkCardContent>
        <S.WorkCardImg src={props.image} alt="Work img" />
        <S.WorkCardText>
          <p>How it works</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</span>
        </S.WorkCardText>
      </S.WorkCardContent>

    </S.WorkCardWrapper>
  );
}

export default HowItWorksCard;
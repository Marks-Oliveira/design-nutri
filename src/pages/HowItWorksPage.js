import React from 'react';

import HowItWorksCard from '../components/HowItWorksCard';

import * as S from './styles';
import workImg from '../images/workImg.jpg';
import workImg2 from '../images/workImg2.jpg';

const HowItWorksPage = () => {
  return (
    <S.WorkWrapper>
      
      <S.WorkContent>
        <S.WorkList>
          <S.WorkListItem>
            <HowItWorksCard image={workImg} />
            <HowItWorksCard image={workImg2} />
          </S.WorkListItem>
        </S.WorkList>
      </S.WorkContent>

    </S.WorkWrapper>
  );
}

export default HowItWorksPage;
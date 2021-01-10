import React from 'react';

import PlanCard from '../components/PlanCard';


import * as S from './styles';
import avatar from '../images/avatar.jpg';
import firstImg from '../images/firstImg.jpg';
import illustration1 from '../images/illustration1.png';
import illustration2 from '../images/illustration2.png';
import illustration3 from '../images/illustration3.png';

const PlansPage = () => {
  return (
    <S.PlansWrapper>
      
      <S.Header>
        <S.Title>
          <span>mellow.</span>
        </S.Title>
        <S.Links>
          <span>Recipes</span>
          <span>Go Green</span>
          <span>Pricing</span>
          <span>How it works</span>
          <S.Avatar src={avatar} alt="Avatar"/>
        </S.Links>
      </S.Header>

      <S.Content>
        <S.Photo>
          <img src={firstImg} alt="First img"/>
        </S.Photo>
        <S.Plans>
          <S.InfoTitle>
            <p>Your subscription has expired...</p>
          </S.InfoTitle>
          <S.InfoText>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis urna, 
                  sodales eu fermentum at, posuere non tellus.</span>
          </S.InfoText>
          <S.Card>
            <PlanCard 
              days="1"
              photo={illustration1}
            />
            <PlanCard 
              days="2"
              photo={illustration2}
            />
            <PlanCard 
              days="3"
              photo={illustration3}
            />
          </S.Card>
        </S.Plans>
      </S.Content>
      
    </S.PlansWrapper>
  );
}

export default PlansPage;

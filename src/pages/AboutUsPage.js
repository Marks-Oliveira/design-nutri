import React from 'react';

import * as S from './styles';
import secondImage from '../images/secondImage.png';
import AboutUsCard from '../components/AboutUsCard';

const AboutUsPage = () => {
  return (
    <S.AboutWrapper>
      <S.AboutImage>
        <img src={secondImage} alt="Second img" />
      </S.AboutImage>
      
      <S.AboutContent>
        <S.AboutList>
          <S.AboutListItem>
            <AboutUsCard title="Go Green" />
            <AboutUsCard title="About us" />
          </S.AboutListItem>
        </S.AboutList>
      </S.AboutContent>
      
    </S.AboutWrapper>
  );
}

export default AboutUsPage;
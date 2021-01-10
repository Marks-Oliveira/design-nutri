import React from 'react';

import * as S from './styles';

import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterLinks>
        <S.Links>
          <span>ABOUT US</span>
          <span>CONTACT</span>
          <span>GO GREEN</span>
          <span>TERMS & CONDITIONS</span>
        </S.Links>
        <S.Name>
          <span>mellow.</span>
        </S.Name>
      </S.FooterLinks>
      <S.FooterContent>
        <S.FooterText>
          <p style={{color: '#FFFFFF'}}>Cool phrase goes here</p>
          <p style={{color: '#03df82'}}>Maybe in two lines</p>
        </S.FooterText>
        <S.FooterInput>
          <input placeholder="Email address" size="25" />
          <button>SUBSCRIBE</button>
        </S.FooterInput>
        <S.FooterInfo>
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="Linkedin" />
        </S.FooterInfo>
        <S.FooterInfo2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </S.FooterInfo2>
      </S.FooterContent>
    </S.FooterWrapper>
  );
}

export default Footer;
import React from 'react';

import * as S from './styles';
import food from '../images/food.png';
import appleStore from '../images/appleStore.png';
import googlePlay from '../images/googlePlay.png';

const FoodPage = () => {
  return (
    <S.FoodWrapper>
      
      <S.FoodContent>
        <S.FoodText>
          <S.FoodTitle>
            <span>Delicious</span>
            <span>Planet-friendly food</span>
          </S.FoodTitle>
          <S.FoodInfo>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</span>
            <button>LET'S TRY</button>
          </S.FoodInfo>
          <S.FoodInfo2>
            <span>Download on IOS and androind for free</span>
            <S.FoodDownloadApp>
              <img src={appleStore} alt="Apple store" />
              <img src={googlePlay} alt="Google play" />
            </S.FoodDownloadApp>
          </S.FoodInfo2>
        </S.FoodText>
        <S.FoodImage>
          <img src={food} alt="Food" />
        </S.FoodImage>
      </S.FoodContent>

    </S.FoodWrapper>
  );
}

export default FoodPage;
import React from 'react';

import * as S from './styles';

const PlanCard = (props) => {
  return (
    <S.CardWrapper>
      <S.Title>
        <p>Plan 01</p>
        <span>{props.days} Days</span>
      </S.Title>
      <S.CardImage>
        <img src={props.photo} alt="Imagem card" />
      </S.CardImage>
      <S.CardInfo>
        <span>Users</span>
        <span>Save Recipes</span>
        <span>Manage Purchase</span>
        <span>Price</span>
        <span>Every</span>
      </S.CardInfo>
      <S.Button>
        <button>LET'S TRY</button>
      </S.Button>
    </S.CardWrapper>
  );
}

export default PlanCard;
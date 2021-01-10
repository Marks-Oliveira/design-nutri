import React from 'react';

import * as S from './styles';

import Recipe1 from '../images/Recipe1.jpg';
import Recipe2 from '../images/Recipe2.jpg';
import Recipe3 from '../images/Recipe3.jpg';
import Recipe4 from '../images/Recipe4.jpg'; 

const RecipesPage = () => {

  const photos = [
    Recipe1,
    Recipe2,
    Recipe3,
    Recipe4,
    Recipe1,
    Recipe2,
    Recipe3,
    Recipe4
  ];

  return (
    <S.RecipeWrapper>

      <S.RecipeTitle>
        <p>Recipes</p>
        <div>
          <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
      </S.RecipeTitle>

      <S.RecipeList>
        <S.List>
          {photos.map((item, key) => (
            <S.ListItem key={key}>
              <img src={item} alt="Recipe" />
            </S.ListItem>
          ))}
        </S.List>
      </S.RecipeList>

    </S.RecipeWrapper>
  );
}

export default RecipesPage;
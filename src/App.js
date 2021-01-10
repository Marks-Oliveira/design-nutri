import React from 'react';

import AboutUsPage from './pages/AboutUsPage';
import FoodPage from './pages/FoodPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PlansPage from './pages/PlansPage';
import RecipesPage from './pages/RecipesPage';
import Footer from './components/Footer';

import * as S from './styles';

function App() {
  return (
    <S.AppWrapper>
      <PlansPage />
      <RecipesPage />
      <AboutUsPage />
      <HowItWorksPage />
      <FoodPage />
      <Footer />
    </S.AppWrapper>
  );
}

export default App;

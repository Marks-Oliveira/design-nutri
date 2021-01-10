import styled from 'styled-components';

// ------- STYLES FROM PLANSPAGE ------------

export const PlansWrapper = styled.div `
  display: flex;
  flex-direction: column;
  height: 46vw;
  background-color: #2bcfa2;

  @media (max-width: 760px) {
    height: 190vw;
  }
`

export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`

export const Title = styled.div `
  font-size: 32px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: white;

  @media (max-width: 760px) {
    font-size: 18px;
  }
`

export const Links = styled.div `
  width: 450px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  font-size: 16px;
  color: white;
  cursor: pointer;

  @media (max-width: 760px) {
    width: 300px;
    font-size: 10px;
  }
`

export const Avatar = styled.img `
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
`

export const Content = styled.div `
  display: flex;
  flex-direction: row;
`

export const Photo = styled.div ` 
  padding-left: 100px;

  img {
    width: 300px;
    height: 510px;
  }

  @media (max-width: 760px) {
    padding-left: 0;
    margin-left: -20px;
    margin-top: 100px;

    img {
      width: 150px;
      height: 320px;
    }
  }
`

export const Plans = styled.div `
  display: flex;
  flex-direction: column;
  padding-left: 50px;

  @media (max-width: 760px) {
    padding-left: 0%;
    margin-left: -20px;
    font-size: 12px;
  }
`

export const InfoTitle = styled.div `
  font-size: 32px;
  font-family: 'Righteous', cursive;
  color: white;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`

export const InfoText = styled.div `
  width: 70%;
  color: white;

  @media (max-width: 760px) {
    width: 90%;
    font-size: 10px;
  }
`

export const Card = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 15px 0;

  @media (max-width: 760px) {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
`

// ------- STYLES FROM RECIPESPAGE ------------

export const RecipeWrapper = styled.div `
  display: flex;
  flex-direction: column;
  height: 50vw;

  @media (max-width: 760px) {
    height: 150vw;
  }
`

export const RecipeTitle = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }

  div {
    width: 70%;
    text-align: center;
    padding-bottom: 30px;
  }

  @media (max-width: 760px) {
    p {
      font-size: 28px;
    }

    div {
      width: 90%;
      font-size: 12px;
    }
  }
`

export const RecipeList = styled.div `
  overflow-x: hidden;
`

export const List = styled.div `
  display: flex;
  flex-direction: row;

  ${RecipeList}:hover & {
    overflow-x: auto;
  }
`

export const ListItem = styled.div `
  flex: none;
  width: 320px;
  height: 380px;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    object-fit: cover;
    border-radius: 8px;
  }
`

// ------- STYLES FROM ABOUTUSPAGE ------------

export const AboutWrapper = styled.div `
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
`

export const AboutImage = styled.div `
  img {
    width: 500px;
    height: 700px;
    transform: rotate(15deg);

    @media (max-width: 760px) {
      width: 150px;
      height: 250px;
      margin-top: 100px;
    }
  }
`

export const AboutContent = styled.div `
  overflow-x: hidden;
  margin-top: 180px;

  @media (max-width: 760px) {
    margin-top: 90px;
  }  
`

export const AboutList = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${AboutContent}:hover & {
    overflow-x: auto;
  }

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`

export const AboutListItem = styled.div `  
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 320px;
`


// ------- STYLES FROM HOWITWORKSPAGE ------------

export const WorkWrapper = styled.div `
  display: flex;
  height: 48vw;
  background-color: #2bcfa2;

  @media (max-width: 760px) {
    height: 90vw;
  }
`

export const WorkContent = styled.div `
  margin-top: 72px;;
  margin-left: 130px;
  overflow-x: hidden;

  @media (max-width: 760px) {
    margin-top: 60px;
    margin-left: 20px;
  }
`

export const WorkList = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;

  ${WorkContent}:hover & {
    overflow-x: auto;
  }
`

export const WorkListItem = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
  width: auto;

  @media (max-width: 760px) {
    height: 220px;
  }
`


// ------- STYLES FROM FOODPAGE ------------

export const FoodWrapper = styled.div `
  display: flex;
  justify-content: center;
  height: 48vw;

  @media (max-width: 760px) {
    height: 120vw;
  }
`

export const FoodContent = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const FoodText = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media (max-width: 760px) {
    margin-left: 30px;
  }
`

export const FoodTitle = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  color: #00a35e;
  font-weight: bold;
  font-size: 60px;
  font-family: 'Yanone Kaffeesatz', sans-serif;

  @media (max-width: 760px) {
    font-size: 30px;
    margin-top: 45px;
  }
`

export const FoodInfo = styled.div `
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 20px;

  button {
    font-size: 12px;
    background-color: #00ea87;    
    border: none;
    border-radius: 6px;
    width: 100px;
    height: 35px;
    margin-top: 30px;
  }

  @media (max-width: 760px) {
    font-size: 12px;

    button {
      font-size: 8px;
      width: 70px;
      height: 25px;
    }
  }
`

export const FoodInfo2 = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 760px) {
    font-size: 10px;
    margin-top: 50px;
  }
`

export const FoodDownloadApp = styled.div `
  img {
    margin-top: 8px;
    width: 150px;
    height: 45px;
  }

  @media (max-width: 760px) {
    img {
      margin-top: 4px;
      width: 50px;
      height: 20px;
    }
  } 
`

export const FoodImage = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 760px) {
    img {
      width: 220px;
      height: 80%;
    }
  }
`
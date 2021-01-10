import styled from 'styled-components';

// -------- STYLES FROM PLANCARD ---------

export const CardWrapper = styled.div `
  width: 200px;
  height: 310px;
  background-color: white;
  border-radius: 5px;

  @media (max-width: 760px) {
    width: 120px;
    height: 236px;
    margin: 10px 2px;
  }
`

export const Title = styled.div `
  padding: 15px 20px 5px;
  
  p {
    margin: 0;
    color: #00a35e;
    font-weight: bold;
    font-size: 24px;
  }

  span {
    color: #FF3030;
  }

  @media (max-width: 760px) {
    p {
      font-size: 16px;
    }
  }
`

export const CardImage = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  img {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 760px) {
    img { 
      width: 40px;
      height: 40px;
    }
  }
`

export const CardInfo = styled.div `
  display: flex;
  flex-direction: column;
  padding: 15px 20px 5px;
  font-size: 14px;

  @media (max-width: 760px) {
    font-size: 10px;
  }
`

export const Button = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 5px;

  button {
    font-size: 12px;
    background-color: #00ea87;    
    border: none;
    border-radius: 6px;
    width: 100px;
    height: 35px;
  }

  @media (max-width: 760px) {
    button {
      font-size: 8px;
      width: 70px;
      height: 25px;
    }
  }
`

// -------- STYLES FROM ABOUTUSCARD ---------

export const AboutCardWrapper = styled.div `
  width: 440px;
  height: 310px;
  margin-left: 180px;
  margin-right: 10px;

  @media (max-width: 760px) {
    margin-left: 0;
    margin-right: 0;
  }
`

export const TitleAbout = styled.div `
  margin-left: 30px;

  p {
    margin: 0;
    padding: 15px 0; 
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 42px;
  }

  span {
    font-size: 18px;
  }

  @media (max-width: 760px) {
    margin-left: 0;
    margin-right: 20px;

    p {
      font-size: 26px;
    }

    span {
      font-size: 14px;
    }
  }
`


// -------- STYLES FROM HOWITWORKSCARD ---------

export const WorkCardWrapper = styled.div `
  width: 900px;
  height: 450px;
  margin-right: 100px;

  @media (max-width: 760px) {
    width: 500px;
    height: 200px;
    margin-right: 50px;
  }
`

export const WorkCardContent = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const WorkCardImg = styled.img `
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 760px) {
    width: 150px;
    height: 200px;
  }
`

export const WorkCardText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-left: 60px;

  p {
    margin: 0;
    padding: 15px 0; 
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 42px;
  }

  span {
    font-size: 18px;
  }

  @media (max-width: 760px) {
    margin-left: 30px;
  
    p {
      font-size: 26px;
    }

    span {
      font-size: 12px;      
    }
  }
`


// -------- STYLES FROM FOOTER ---------

export const FooterWrapper = styled.div `
  height: 38vw;
  background-color: #3b3b3b;

  @media (max-width: 760px) {
    height: 70vw;
  }
`

export const FooterLinks = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 70px;
  color: white;

  @media (max-width: 760px) {
    padding: 20px;
  }
`

export const Links = styled.div `
  span {
    padding-right: 50px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  
    @media (max-width: 760px) {
      font-size: 8px;
      padding-right: 10px;
    }
  }
`

export const Name = styled.div `
  padding-right: 30px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 760px) {
    font-size: 25px;
    padding-right: 0;
  }
`

export const FooterContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FooterText = styled.div `
  padding: 0 70px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 32px;

  p {
    margin: 0;
    padding: 3px 0;
  }

  @media (max-width: 760px) {
    font-size: 14px;
    width: 100%;
    margin-left: -50px;
    margin-top: 15px;
  }
`

export const FooterInput = styled.div `
  padding: 20px 0;

  input {
    margin-left: 70px;
    padding: 8px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  } 

  button {
    font-size: 12px;
    background-color: #00ea87;    
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    width: 100px;
    height: 34px;
    margin-left: 5px;
  }

  @media (max-width: 760px) {
    padding: 5px 0;

    input {
      padding: 3px;
      font-size: 8px;
      margin-left: 20px;
    }

    button {
      font-size: 6px;
      width: 50px;
      height: 17px;
      margin-top: 10px;
    }
  }
`

export const FooterInfo = styled.div `
  display: flex;
  justify-content: space-between;
  width: 200px; 
  margin-left: 60px;
  margin-top: 20px;
  
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    width: 100px;
    margin-left: 20px;

    img {
      width: 10px;
      height: 10px;
    }
  }
`

export const FooterInfo2 = styled.div `
  margin-left: 70px;
  color: white;
  margin-top: 20px;
  font-size: 14px;

  @media (max-width: 760px) {
    font-size: 8px;
    margin-left: 22px;
    margin-top: 5px;
  }
`
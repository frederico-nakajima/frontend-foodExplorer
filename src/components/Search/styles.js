import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
  color:${({theme}) => theme.COLORS.GRAY_300};   
  border-radius: 1.0rem;
  margin-top:.6rem;
  margin-bottom:2.5rem;
  >input{
    height: 4.8rem;
    width: 100%;
    border-radius: .8rem;
    padding: 1.2rem;
    font-family: "Roboto", serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color:${({theme}) => theme.COLORS.WHITE};
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
    border:0;
    outline:none;
  
        
    &::placeholder {
      color:${({theme}) => theme.COLORS.GRAY_300};
      font-family: "Roboto", serif;
      font-size: 1.6rem;        
      font-weight: 400;
      line-height: 100%; 
      position:relative;
      left:.5rem;
    }        
  }
  >svg{
    font-size: 3.0rem; 
    margin-left:1.6rem;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
  }


`;

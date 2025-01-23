import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
  color:${({theme}) => theme.COLORS.GRAY_300};   
  border-radius: 10px;
  margin-top:6px;

  >input{
    height: 48px;
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    font-family: "Roboto", serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    color:${({theme}) => theme.COLORS.WHITE};
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
    border:0;
    outline:none;
  
        
    &::placeholder {
      color:${({theme}) => theme.COLORS.GRAY_300};
      font-family: "Roboto", serif;
      font-size: 16px;        
      font-weight: 400;
      line-height: 100%; 
      position:relative;
      left:5px;
    }        
  }
  >svg{
    font-size: 30px; 
    margin-left:16px;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
  }


`;

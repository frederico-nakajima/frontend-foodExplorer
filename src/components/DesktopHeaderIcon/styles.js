import styled from 'styled-components';


export const Container = styled.header`
    grid-area: header;
    padding:24px 5px;
    height: 94px;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_600};
  
  >main{
    display: flex;
    justify-content:center;
    align-items: center;
    gap:32px;
    width:1134px;
  
  }

`;

export const Brand = styled.div`
    display:flex;
    align-items:flex-start;
    
    gap:10px;

    >img{
        width: 30px;
        height: 30px;
    }
    >div{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        
       h2{
        font-family: "Roboto", serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width:150px;
        }
        


       p{
        color:${({theme}) => theme.COLORS.CIANO};
        font-family: "Roboto",serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */

       }

    }
`;

export const Search  = styled.div`
  grid-area: search;
  display:flex;
  align-items:center;
  justify-content:center;  
  width:700px;
  height: 48px; 
  border-radius: 5px;
  padding: 12px 200px;
  color:${({theme}) => theme.COLORS.WHITE};
  background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
  
  > img {
    margin-right: 8px;
  }
  > input {
    
    height: 100%;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  
    
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: "Roboto", serif;
    font-size: 16px;
    font-weight: 400;
    text-align:center;
  }
  
  

  &:focus {
    outline: none;
  }
  }
`;



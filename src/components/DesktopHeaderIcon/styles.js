import styled from 'styled-components';


export const Container = styled.header`
  grid-area: header;
  padding:2.4rem .5rem;
  height: 9.4rem;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color:${({theme}) => theme.COLORS.BACKGROUND_600};
  position: fixed;
  top: 0;
  z-index: 999;
  outline:revert;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.5s ease-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
  >main{
    display: flex;
    justify-content:center;
    align-items: center;
    gap:3.2rem;
    width:113.4rem;
    >img{
      cursor:pointer;
    }
  }

`;

export const Brand = styled.div`
  display:flex;
  align-items:flex-start;
  gap:1.0rem;

  >img{
    width: 3.0rem;
    height: 3.0rem;
  }
  >div{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    
    h2{
      font-family: "Roboto", serif;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width:15.0rem;
    }
  }
    
  p{
    color:${({theme}) => theme.COLORS.CIANO};
    font-family: "Roboto",serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const Search  = styled.div`
  grid-area: search;
  display:flex;
  align-items:center;
  justify-content:center;
  width:70.0rem;
  height: 4.8rem;
  border-radius: .5rem;
  padding: 1.2rem 14.0rem;
  color:${({theme}) => theme.COLORS.WHITE};
  background-color:${({theme}) => theme.COLORS.BACKGROUND_900};  
  >img {
    margin-right: .8rem;
    position:relative;
    margin-left:-10.0rem;
  }
  >input {
    width: 40.0rem;   
    height: 100%;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%; 
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: "Roboto", serif;
      font-size: 1.6rem;
      font-weight: 400;     
      
    }
    &:focus {
      outline: none;
    }
  }
`;


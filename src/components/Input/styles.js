import styled from "styled-components";


export const Container = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    gap: 14px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    margin:36px 0;

  > input {
    height: 48px;
    width: 372px;
 
   
    
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    
    }
    > svg {
      margin-left: 1rem;
      width:24px;
      height:24px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      }


  

}
`;
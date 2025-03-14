import { Container } from './styles';

export function ButtonIcon({icon:Icon,children, ...rest}){
    return(
      <Container type='button' {...rest}>
        {Icon && <img src={Icon} alt="Icone do botão" />}
        
          {children}
        
      </Container>
    )
}

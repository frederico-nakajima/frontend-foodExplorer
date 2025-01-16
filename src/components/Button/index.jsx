import { Container } from './styles';



export function Button({icon:Icon, title}){
    return(
        <Container type="button">
          {Icon && <Icon  className="icon" size = {20}/>}
          {title}
        </Container>
    )
}

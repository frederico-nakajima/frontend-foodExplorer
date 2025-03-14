import { Container} from './styles';

export function Search({ icon: Icon, ...rest }) {
  
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
};

      
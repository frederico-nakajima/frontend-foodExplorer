import { Container } from './styles';
import { useSearch } from '../../contexts/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';

export function Search({ icon: Icon, placeholder, onSearchClick }) {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleInputChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  function handleIconClick() {
    if (location.pathname !== "/") {
      navigate("/");
    }

    // Fechar menu se função foi passada
    if (onSearchClick) {
      onSearchClick();
    }
  }

  return (
    <Container>
      {Icon && <Icon onClick={handleIconClick} style={{ cursor: 'pointer' }} />}
      <input
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </Container>
  );
}

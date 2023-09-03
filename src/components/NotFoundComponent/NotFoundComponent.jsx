import notFoundImage from '../../assets/notFound.jpg';
import {
  ErrorImage,
  ErrorTitle,
  ErrowWrapper,
  StyledLink,
} from './NotFoundComponent.styled';

const NotFoundComponent = () => {
  return (
    <ErrowWrapper>
      <ErrorImage src={notFoundImage} alt="bad request error" />
      <ErrorTitle>Нічого не було знайдено</ErrorTitle>
      <StyledLink to="/">На головну</StyledLink>
    </ErrowWrapper>
  );
};

export default NotFoundComponent;

import emptyImage from '../../../assets/emptyBasket.png';
import {
  Container,
  EmptyCartButton,
  EmptyCartImage,
  EmptyCartText,
  EmptyCartTitle,
  EmptyCartWrapper,
} from './EmptyCard.styled';

const EmptyCard = () => {
  return (
    <Container>
      <EmptyCartWrapper>
        <EmptyCartTitle>Корзина пуста</EmptyCartTitle>

        <EmptyCartText>
          Ймовірно, що Ви досі не замовили піцу.
          <br />
          Для того, щоб замовити піцу, перейдіть на главну сторінку.
        </EmptyCartText>

        <EmptyCartImage src={emptyImage} alt="empty basket image" />

        <EmptyCartButton to="/">Повернутись назад</EmptyCartButton>
      </EmptyCartWrapper>
    </Container>
  );
};

export default EmptyCard;

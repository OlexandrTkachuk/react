import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from 'redux/slices/cartItemsSlice';
import {
  selectCartItems,
  selectTotalCount,
  selectTotalPrice,
} from 'redux/slices/selectors';

//icons
import { IoIosArrowBack } from 'react-icons/io';
import {
  ButtonBack,
  ButtonBackText,
  ButtonPay,
  ButtonPayText,
  ButtonTrash,
  ButtonWrapper,
  CartIcon,
  CartList,
  Container,
  Title,
  TopBlockTitle,
  TopBlockWrapper,
  TotalInfoText,
  TotalInfoWrapper,
  TrashIcon,
  TrashText,
} from './CartComponent.styled';

const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  return (
    <Container>
      <TopBlockWrapper>
        <TopBlockTitle>
          <CartIcon />
          <Title>Кошик</Title>
        </TopBlockTitle>

        <ButtonTrash onClick={() => dispatch(clearCart())}>
          <TrashIcon />
          <TrashText>очистити кошик</TrashText>
        </ButtonTrash>
      </TopBlockWrapper>

      <CartList>
        {/* {cartItems.map(item => (
          <CartItem item={item} key={`${item.id}${item.size}`} />
        ))} */}
      </CartList>

      <TotalInfoWrapper>
        <TotalInfoText>
          Всього піц:{' '}
          <span style={{ fontWeight: 700, color: 'black' }}>
            {totalCount} шт.
          </span>
        </TotalInfoText>

        <TotalInfoText>
          Сума замовлення:{' '}
          <span style={{ fontWeight: 700, color: '#FE5F1E' }}>
            {totalPrice} грн.
          </span>
        </TotalInfoText>
      </TotalInfoWrapper>

      <ButtonWrapper>
        <ButtonBack to="/">
          <IoIosArrowBack color="#D3D3D3" />
          <ButtonBackText>Повернутись назад</ButtonBackText>
        </ButtonBack>

        <ButtonPay>
          <ButtonPayText>Оплатити замовлення</ButtonPayText>
        </ButtonPay>
      </ButtonWrapper>
    </Container>
  );
};

export default CartComponent;

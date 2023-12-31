import { useDispatch } from 'react-redux';
import {
  countDecrement,
  countIncrement,
  deleteCartItem,
} from 'redux/slices/cartItemsSlice';

// constants
import { typeOptions } from 'constants/typeOptions';
import {
  CartItemDesc,
  CartItemImage,
  CartItemText,
  CartItemTitle,
  CartItemWrapper,
  CartPriceText,
  CartWrapper,
  CountWrapper,
  CounterText,
  DeleteIcon,
  MinusIcon,
  PlusIcon,
  PriceWrapper,
} from './CartItem.styled';

// styles

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, title, price, id, type, size, count } = item;

  const handleDecrementCount = id => {
    if (count > 1) {
      dispatch(countDecrement(id));
    }

    if (count === 1) {
      dispatch(deleteCartItem(id));
    }
  };

  const handleIncrement = id => {
    if (count < 10) {
      dispatch(countIncrement(id));
    }
  };

  return (
    <CartItemWrapper>
      <CartWrapper>
        <CartItemImage src={imageUrl} alt={title} />

        <CartItemDesc>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemText>
            {typeOptions[type]} тісто, {size} см.
          </CartItemText>
        </CartItemDesc>
      </CartWrapper>

      <PriceWrapper>
        <CountWrapper>
          <MinusIcon
            size={32}
            color={count > 1 ? '#FE5F1E' : '#D7D7D7'}
            onClick={() => handleDecrementCount(id)}
          />

          <CounterText>{count}</CounterText>

          <PlusIcon
            size={32}
            color="#FE5F1E"
            onClick={() => handleIncrement(id)}
          />
        </CountWrapper>

        <CartPriceText>{price * count}</CartPriceText>

        <DeleteIcon
          size={32}
          color="#D7D7D7"
          onClick={() => dispatch(deleteCartItem(id))}
        />
      </PriceWrapper>
    </CartItemWrapper>
  );
};

export default CardItem;

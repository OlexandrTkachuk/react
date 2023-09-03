// redux
import { useSelector } from 'react-redux';
import { selectCartItems } from 'redux/slices/selectors';

// components
import CartComponent from 'components/CartPageComponents/CartComponent/CartComponent';
import EmptyCard from 'components/CartPageComponents/EmptyCard/EmptyCard';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  return <>{cartItems.length > 0 ? <CartComponent /> : <EmptyCard />}</>;
};

export default CartPage;

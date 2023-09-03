import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectTotalCount, selectTotalPrice } from 'redux/slices/selectors';
import { clearHomePage } from 'redux/slices/filterSlice';

import logo from '../../assets/logo.png';
import Search from 'components/Search/Search';

import {
  ButtonDelimiter,
  CartIcon,
  CartText,
  CartWrapper,
  Container,
  HeaderWrapper,
  LogoImg,
  LogoInfo,
  LogoName,
  LogoText,
  LogoWrapper,
  SStyledLink,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  const handleLogoClick = () => {
    dispatch(clearHomePage());
  };

  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper onClick={handleLogoClick}>
          <Link to="/">
            <LogoImg src={logo} alt="Pizza's logo" />
          </Link>

          <SStyledLink to="/">
            <LogoInfo>
              <LogoName>
                <p style={{ color: 'green' }}>Pizza </p>
                <p style={{ color: '#fff' }}>& </p>
                <p style={{ color: 'orangered' }}>Hungry</p>
              </LogoName>
              <LogoText>смачна доставка піци у Вінниці</LogoText>
            </LogoInfo>
          </SStyledLink>
        </LogoWrapper>

        <Search />

        <CartWrapper to="/cart">
          <CartText>{totalPrice} грн.</CartText>

          <ButtonDelimiter />

          <CartIcon />
          <CartText>{totalCount}</CartText>
        </CartWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

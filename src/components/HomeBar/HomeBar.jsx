import Categories from 'components/Categories/Categories';
import Sort from 'components/Sort/Sort';

import { HomeBarWrapper } from './HomeBar.styled';

const Homebar = ({ clearPage }) => {
  return (
    <HomeBarWrapper>
      <Categories />
      <Sort />
    </HomeBarWrapper>
  );
};

export default Homebar;

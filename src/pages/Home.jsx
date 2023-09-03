import { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoryId,
  selectSortType,
  selectPage,
  selectFilter,
} from 'redux/slices/selectors';
import { fetchPizzas } from 'redux/slices/pizza-operations';
import { fetchPizzasByCategory } from 'redux/slices/pizza-operations';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';
import Pagination from 'components/Pagination/Pagination';

const Home = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
  const searchValue = useSelector(selectFilter);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');

    dispatch(fetchPizzasByCategory({ category, order, sortBy }));
  }, [categoryId, dispatch, sortType]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');

    dispatch(fetchPizzas({ category, page, order, sortBy }));
  }, [categoryId, dispatch, page, sortType]);

  return (
    <>
      <Homebar />

      <PizzaList />

      {!searchValue && <Pagination />}
    </>
  );
};

export default Home;

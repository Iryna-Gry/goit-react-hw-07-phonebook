import css from './SearchInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilterValue } from 'redux/filter/slice';
export const SearchInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  return (
    <div className={css.Search__container}>
      <p className={css.Search__title}>Search contact by name</p>
      <input
        type="text"
        className={css.Search__input}
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      ></input>
    </div>
  );
};

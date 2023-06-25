import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ErrandsTable } from './errandsTable';

/* eslint-disable react/react-in-jsx-scope */
export const ErrandsList = () => {
  const errands = useSelector((state: RootState) => state.errands);

  return (
    <div>
      <ErrandsTable errands={errands} />
    </div>
  );
};

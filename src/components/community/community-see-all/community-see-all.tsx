import { useAppDispatch, useAppSelector } from '../../../hooks';
import { seeAll, close } from '../../../services/community';
import s from './community-see-all.module.scss';

export default function CommunitySeeAll() {
  const isSeeAll = useAppSelector((state) => state.root.communitySlice.isSeeAll);
  const dispatch = useAppDispatch();

  const handleSeeAll = () => {
    dispatch(seeAll());
  };

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <div className={s.see_all}>
      <button
        type="button"
        className={s.btn}
        onClick={isSeeAll === false ? handleSeeAll : handleClose}
      >
        {isSeeAll === false ? 'Смотреть все' : 'Скрыть'}
      </button>
    </div>
  );
}

import { useAppDispatch } from '../../../hooks';
import { toggleModal } from '../../../services/modal';
import type { TAppHeaderNavUserItem } from '../../../types/app-header';
import s from './app-header-nav-user-item.module.scss';

export default function AppheaderNavUserItem({ type, text, icon }: TAppHeaderNavUserItem) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <li className={s.item}>
      <button type="button" className={type === 'text' ? s.btn : s.login} onClick={handleClick}>
        {type === 'text' ? text : <img src={icon} alt="icon" />}
      </button>
    </li>
  );
}

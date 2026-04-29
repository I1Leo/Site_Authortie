import { useAppDispatch } from '../../../hooks';
import { toggleModal } from '../../../services/modal';
import type { TAppHeaderInsertItem } from '../../../types/app-header';
import s from './app-header-insert-item.module.scss';

export default function AppHeaderInsertItem({ type, text }: TAppHeaderInsertItem) {
  const dispatch = useAppDispatch();

  return (
    <li className="site-navigation__item_insert">
      {type === 'link' ? (
        <a href="#" className={s.link}>
          {text}
        </a>
      ) : (
        <button type="button" className={s.btn_login} onClick={() => dispatch(toggleModal())}>
          {text}
        </button>
      )}
    </li>
  );
}

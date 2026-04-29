import AppHeaderInsertItem from '../app-header-insert-item/app-header-insert-item';
import s from './app-header-insert.module.scss';

export default function AppHeaderInsert() {
  return (
    <div>
      <ul className={s.insert}>
        <AppHeaderInsertItem type="link" text="Аналитика" />
        <AppHeaderInsertItem type="link" text="Сообщество" />
        <AppHeaderInsertItem type="link" text="Для организаций" />
        <AppHeaderInsertItem type="btn" text="Войти" />
      </ul>
    </div>
  );
}

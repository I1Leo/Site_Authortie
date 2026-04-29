import AppHeaderNavSiteItem from '../app-header-nav-site-item/app-header-nav-site-item';
import s from './app-header-nav-site.module.scss';

export default function AppHeaderNavSite() {
  return (
    <ul className={s.nav_site}>
      <AppHeaderNavSiteItem text="Аналитика" />
      <AppHeaderNavSiteItem text="Сообщество" />
      <AppHeaderNavSiteItem text="Для организаций" />
    </ul>
  );
}

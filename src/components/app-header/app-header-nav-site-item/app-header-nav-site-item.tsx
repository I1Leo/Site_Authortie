import type { TAppHeaderNavSiteItem } from '../../../types/app-header';
import s from './app-header-nav-site-item.module.scss';

export default function AppHeaderNavSiteItem({ text }: TAppHeaderNavSiteItem) {
  return (
    <li className={s.item}>
      <a href="#" className={s.link}>
        {text}
      </a>
    </li>
  );
}

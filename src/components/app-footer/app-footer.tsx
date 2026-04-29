import { appFooterLinks, appFooterSocials } from '../../data/appFooter';
import AppFooterLink from './app-footer-link/app-footer-link';
import AppFooterSocial from './app-footer-social/app-footer-social';
import s from './app-footer.module.scss';

export default function AppFooter() {
  const links = appFooterLinks;
  const socials = appFooterSocials;

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.items}>
          <div className={s.first}>
            <h2 className={s.headline}>Authortie</h2>
            <p className={s.subtitle}>© Все права защищены</p>
          </div>
          <div className={s.second}>
            <ul className={s.links}>
              {links.map((item) => (
                <AppFooterLink key={item.id} text={item.text} />
              ))}
            </ul>
          </div>
          <div className={s.last}>
            <ul className={s.socials}>
              {socials.map((item) => (
                <AppFooterSocial key={item.id} img={item.img} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

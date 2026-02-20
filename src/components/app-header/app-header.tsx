

export default function AppHeader() {
   return (
      <header className="page__header header">
        <div className="header__container">
            <nav className="header__nav">
                <li className="header__logo logo">
                    <img className="logo__icon" src="img/logo.svg" alt="Authortie" />
                </li>
                <ul className="site__navigation  site-navigation">
                    <li className="site-navigation__item">
                        <a href="#" className="site-navigation__link">Аналитика</a>
                    </li>
                    <li className="site-navigation__item">
                        <a href="#" className="site-navigation__link">Сообщество</a>
                    </li>
                    <li className="site-navigation__item site-navigation__item">
                        <a href="#" className="site-navigation__link site-navigation__item_last">Для организаций</a>
                    </li>
                </ul>
                <ul className="user__navigation user-navigation">
                    <li className="user-navigation__item user-navigation__item_btn">
                        <button type="button" className="user-navigation__btn">Создать заявку</button>
                    </li>
                    <li className="user-navigation__item user-navigation__item_last">
                        <button type="button" className="user-navigation__login">
                            <img className="user-navigation__icon user-navigation__icon_login" src="img/login.svg"
                                alt="login" />
                        </button>
                        <button type="button" className="user-navigation__burger">
                            <img className="user-navigation__icon user-navigation__icon_burger" src="img/nav__burger.svg"
                                alt="burger" />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="header__nav_insert">
            <ul className="site-navigation_insert">
                <li className="site-navigation__item_insert">
                    <a href="#" className="site-navigation__link_insert">Аналитика</a>
                </li>
                <li className="site-navigation__item_insert">
                    <a href="#" className="site-navigation__link_insert">Сообщество</a>
                </li>
                <li className="site-navigation__item_insert">
                    <a href="#" className="site-navigation__link_insert">Для организаций</a>
                </li>
                <li className="site-navigation__item_insert site-navigation__item_login">
                    <button type="button" className="site-navigation__btn site-navigation__btn_login">Войти</button>
                </li>
            </ul>
        </div>

    </header>
   )
}
import AppHeaderBurger from "../app-header-burger/app-header-burger";
import AppHeaderNavSite from "../app-header-nav-site/app-header-nav-site";
import AppHeaderNavUser from "../app-header-nav-user/app-header-nav-user";
import logo from "../../../img/logo.svg";
import s from "./app-header-nav.module.scss"

export default function AppHeaderNav() {
    return (
        <nav className={s.nav}>
            <div className={s.logo}>
                <img className="logo__icon" src={logo} alt="Authortie" />
            </div>
            <AppHeaderNavSite />
            <AppHeaderNavUser />
            <AppHeaderBurger />
        </nav>
    )
}
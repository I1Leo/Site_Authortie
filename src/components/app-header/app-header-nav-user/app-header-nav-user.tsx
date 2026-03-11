import login_icon from "../../../img/login.svg"
import AppheaderNavUserItem from "../app-header-nav-user-item/app-header-nav-user-item";
import s from "./app-header-nav-user.module.scss"

export default function AppHeaderNavUser() {
   return (
      <ul className={s.nav_user}>
         <AppheaderNavUserItem type="text" text="Создать заявку" />
         <AppheaderNavUserItem type="icon" icon={login_icon} />
      </ul>
   )
}
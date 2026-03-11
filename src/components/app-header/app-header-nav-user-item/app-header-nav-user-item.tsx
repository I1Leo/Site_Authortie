import { TAppHeaderNavUserItem } from "../../../types/app-header";
import s from "./app-header-nav-user-item.module.scss"

export default function AppheaderNavUserItem({ type, text, icon }: TAppHeaderNavUserItem) {
   return (
      <li className={s.item}>
         <button type="button" className={type === "text" ? s.btn : s.login}>
            {
               type === "text" ? text : <img  src={icon} alt="icon" />
            }
         </button>
      </li>
   )
}
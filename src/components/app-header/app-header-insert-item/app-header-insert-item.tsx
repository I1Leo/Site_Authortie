import { TAppHeaderInsertItem } from "../../../types/app-header";
import s from "./app-header-insert-item.module.scss"

export default function AppHeaderInsertItem({type, text} : TAppHeaderInsertItem) {
   return (
      <li className="site-navigation__item_insert">
         {
            type === "link" ?
            <a href="#" className={s.link}>{text}</a> :
            <button type="button" className={s.btn_login}>{text}</button>
         }          
      </li>
   )
}
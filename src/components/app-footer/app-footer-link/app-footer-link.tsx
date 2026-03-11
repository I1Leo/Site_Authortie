import { TAppFooterLinkProps } from "../../../types/app-footer";
import s from "./app-footer-link.module.scss"

export default function AppFooterLink({text} : TAppFooterLinkProps) {
   return (
      <li>
         <a href="#" className={s.link}>{text}</a>
      </li>
   )
}
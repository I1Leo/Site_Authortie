import { TCommunityCategoryProps } from "../../../types/community";
import s from "./community-category.module.scss"

export default function CommunityCategory({item} : TCommunityCategoryProps) {
   return (
      <li>
         <p className={`${s.text} ${item.color === "yellow" ? s.yellow : s.green}`}>{item.text}</p>
      </li>
   )
}
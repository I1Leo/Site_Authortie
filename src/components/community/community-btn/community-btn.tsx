import s from "./community-btn.module.scss";
import img from "../../../img/author-link.svg"

export default function CommunityBtn() {
   return (
      <div className={s.container}>
         <button type="button" className={s.btn}>Предложить сотрудничество</button>
         <a href="#" className={s.link}>
            <img className={s.img} src={img} alt=""/>
         </a>
      </div>
   )
}
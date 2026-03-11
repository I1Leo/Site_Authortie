import { useAppDispatch, useAppSelector } from "../../../hooks";
import burger_icon from "../../../img/nav__burger.svg";
import cross_icon from "../../../img/cross.svg"
import { toggleBurger } from "../../../services/app-header";
import s from "./app-header-burger.module.scss";

export default function AppHeaderBurger() {
   
   const { isBurgerActive } = useAppSelector(state => state.root.appHeaderBurger);
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(toggleBurger());
   }

   return (
         <div>
            <button type="button" className={s.burger} onClick={handleClick}>
               <img src={!isBurgerActive ? burger_icon : cross_icon} alt="burger" />
            </button>
         </div>
   )
}
import { useAppSelector } from "../../hooks";
import AppHeaderInsert from "./app-header-insert/app-header-insert";
import AppHeaderNav from "./app-header-nav/app-header-nav";
import s from "./app-header.module.scss";

export default function AppHeader() {
    
    const { isBurgerActive } = useAppSelector(state => state.root.appHeaderBurger);

    return (
        <>
            <header className={s.header}>
                <div>
                    <AppHeaderNav />
                </div>
           </header>
         {isBurgerActive && <AppHeaderInsert />}
        </>

    )
}
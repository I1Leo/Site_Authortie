import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setCurrentState } from "../../../services/modal";
import type { TModalHeaderItemProps } from "../../../types/modal";
import s from "./modal-header-item.module.scss"

export default function ModalHeaderItem({text} : TModalHeaderItemProps) {
   
   const currentState = useAppSelector(state => state.root.modalSlice.currentState);
   const dispatch = useAppDispatch();

   const handleClick = (text : string) => {
      dispatch(setCurrentState(text))
   };

   return (
      <li className={s.item}>
              <button
                type="button"
                className={`${s.text} ${text === currentState && s.active}`}
                onClick={() => handleClick(text)}
              >
                {text}
              </button>
            </li>
   )
}
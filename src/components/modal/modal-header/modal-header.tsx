import ModalHeaderItem from "../modal-header-item/modal-header-item";
import s from "./modal-header.module.scss";

export default function ModalHeader() {
   return (
      <ul className={s.modal_header}>
         <ModalHeaderItem text="Вход"/>
         <ModalHeaderItem text="Регистрация"/>
      </ul>
   )
}
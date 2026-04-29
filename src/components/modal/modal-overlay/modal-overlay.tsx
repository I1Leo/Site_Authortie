import { useAppDispatch } from '../../../hooks';
import { toggleModal } from '../../../services/modal';
import s from './modal-overlay.module.scss';

export default function ModalOverlay() {
  const dispatch = useAppDispatch();
  return <div className={s.modal_overlay} onClick={() => dispatch(toggleModal())}></div>;
}

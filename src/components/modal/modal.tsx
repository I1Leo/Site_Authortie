import { createPortal } from 'react-dom';
import s from './modal.module.scss';
import ModalOverlay from './modal-overlay/modal-overlay';
import cross from '../../img/cross__popup.svg';
import ModalHeader from './modal-header/modal-header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleModal } from '../../services/modal';
import ModalSignin from './modal-signin/modal-signin';
import ModalSignup from './modal-signup/modal-signup';
import { useEffect } from 'react';

export default function Modal() {
   const currentState = useAppSelector(state => state.root.modalSlice.currentState);
   const dispatch = useAppDispatch();
   useEffect(() => {
		const handleEsc = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') {
				dispatch(toggleModal());
			}
		};

		window.addEventListener('keydown', handleEsc);

		return (): void => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, [dispatch]);
   const modalRoot = document.getElementById('modals');
   if (!modalRoot) return null;

   return createPortal(
      <>
         <ModalOverlay />
         <div className={s.modal}>
            <form className={s.form}>
               <div className={s.close}>
                  <button type="button" onClick={() => dispatch(toggleModal())}>
                     <img src={cross} alt="cross" width="10px" height="10px" />
                  </button>
               </div>
               <ModalHeader />
               {currentState === "Вход" && <ModalSignin />}
               {currentState === "Регистрация" && <ModalSignup />}

            </form>
         </div>
      </>,
      modalRoot,
   );
}

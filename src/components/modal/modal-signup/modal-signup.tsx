import s from "./modal-signup.module.scss"

export default function ModalSignup() {
   return (
      <div className={s.signup}>
         <label className="signup__label signup__label_email">
            <input
               type="email"
               name=""
               id="signupEmail"
               placeholder="E-mail"
               className={s.input}
            />
         </label>
         <label className="signup__label signup__label_password">
            <input
               type="password"
               name=""
               id="signupPassword"
               placeholder="Пароль"
               className={`${s.input} ${s.password}`}
            />
         </label>
         <label className="signup__label signup__label_password-repeat">
            <input
               type="password"
               name=""
               id="signupPasswordRepeat"
               placeholder="Повторите пароль"
               className={`${s.input} ${s.password}`}
            />
         </label>
         <label className={s.checkbox}>
            <input type="checkbox" id="signupCheckbox" defaultChecked />
            <p className={s.checkbox_text}>
               Я принимаю условия{' '}
               <a href="#" className={s.checkbox_link}>
                  Пользовательского соглашения
               </a>{' '}
               и даю своё согласие на обработку персональных данных на условиях, определенных{' '}
               <a href="#" className={s.checkbox_link}>
                  Политикой конфиденциальности.
               </a>
            </p>
         </label>
         <div className={s.btn_container}>
            <button type="button" className={s.btn}>
               Регистрация
            </button>
         </div>
      </div>
   )
}
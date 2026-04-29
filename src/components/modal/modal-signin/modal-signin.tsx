import s from "./modal-signin.module.scss";

export default function ModalSignin() {
   return (
      <div className={s.signin}>
            <label>
              <input
                type="email"
                name=""
                id="signinEmail"
                placeholder="E-mail"
                className={s.input}
              />
            </label>
            <label>
              <input
                type="password"
                name=""
                id="signinPassword"
                placeholder="Пароль"
                className={`${s.input} ${s.password}`}
              />
            </label>
            <a href="#" className={s.password_forget}>
              Забыли пароль?
            </a>
            <div className={s.btn_container}>
              <button type="button" className={s.btn}>
                Войти
              </button>
            </div>
          </div>
   )
}
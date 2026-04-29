import s from './hero-section.module.scss';
import bg from '../../img/bg-image.png';

export default function HeroSection() {
  return (
    <div className={s.hero_section}>
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.article}>
            <h2 className={s.headline}>Сообщество взаимопомощи между учёными со всего мира</h2>
            <div className={s.text}>
              Удобный сервис, который подберёт для вас коллег и поможет наладить с ними
              взаимовыгодное сотрудничество в областях совместных исследований, соавторства,
              рецензирования и повышения индекса цитирования.
            </div>
            <button type="button" className={s.btn}>
              Присоединиться
            </button>
          </div>
          <div className={s.image_container}>
            <img className={s.image} src={bg} alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
}

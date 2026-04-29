import type { THowItWorksItem } from '../../../types/howitworks';
import s from './howitworks-item.module.scss';

export default function HowItWorksItem({ image, text, idx }: THowItWorksItem) {
  return (
    <li className={s.item}>
      <div className={s.image_container}>
        <p className={s.index}>{idx + 1}</p>
        <img className={s.image} src={image} alt={text} />
      </div>
      <p className={s.text}>{text}</p>
    </li>
  );
}

import { howItWorksData } from '../../data/howitworks';
import HowItWorksItem from './hoitworks-item/howitworks-item';
import s from './howitworks.module.scss';

export default function HowItWorks() {
  const data = howItWorksData;

  return (
    <div className={s.howitworks}>
      <section className={s.container}>
        <h2 className={s.title}>Как это работает</h2>
        <ul className={s.list}>
          {data.map((item, idx) => (
            <HowItWorksItem key={idx} image={item.img} text={item.text} idx={idx} />
          ))}
        </ul>
      </section>
    </div>
  );
}

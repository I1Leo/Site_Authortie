import type { TCommunityItemProps } from '../../../types/community';
import CommunityBtn from '../community-btn/community-btn';
import CommunityCategory from '../community-category/community-category';
import CommunityKey from '../community-key/community-key';
import authorPhoto from '../../../img/author__photo.jpg';
import s from './community-item.module.scss';

export default function CommunityItem({ item }: TCommunityItemProps) {
  const categories = item.categories;
  const keys = item.keys;
  const author = item.author;

  return (
    <li className={s.item}>
      <ul className={s.categories}>
        {categories.map((item) => (
          <CommunityCategory key={item.id} item={item} />
        ))}
      </ul>
      <h3 className={s.headline}>{item.headline}</h3>
      <p className={s.subtitle}>Комментарий</p>
      <p className={s.text}>{item.comment}</p>
      <p className={s.subtitle}>Вознаграждение</p>
      <p className={s.reward}>{item.reward}</p>
      <ul className={s.keys}>
        {keys.map((item) => (
          <CommunityKey key={item.id} item={item} />
        ))}
      </ul>
      <div className={s.author}>
        <div className={s.author_img_container}>
          <img className={s.author_img} src={authorPhoto} alt="author photo" />
        </div>
        <div className={s.author_info}>
          <ul>
            <li className={`${s.author_info_item} ${s.author_name}`}>{author.name}</li>
            <li className={s.author_info_item}>{author.degree}</li>
            <li className={s.author_info_item}>{author.education}</li>
          </ul>
        </div>
      </div>
      <CommunityBtn />
    </li>
  );
}

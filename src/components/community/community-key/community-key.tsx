import type { TCommunityKeyProps } from '../../../types/community';
import s from './community-key.module.scss';

export default function CommunityKey({ item }: TCommunityKeyProps) {
  return (
    <li className={s.key}>
      <p className={s.text}>{item.text}</p>
    </li>
  );
}

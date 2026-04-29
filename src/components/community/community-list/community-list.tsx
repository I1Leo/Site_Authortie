import { communityData } from '../../../data/community';
import { useAppSelector } from '../../../hooks';
import CommunityItem from '../community-item/community-item';
import s from './community-list.module.scss';

export default function CommunityList() {
  const itemsPerPage = useAppSelector((state) => state.root.communitySlice.itemsPerPage);

  const data = communityData.slice(0, itemsPerPage);

  return (
    <ul className={s.list}>
      {data.map((item) => (
        <CommunityItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

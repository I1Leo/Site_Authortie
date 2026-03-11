import CommunityList from "./community-list/community-list";
import CommunitySeeAll from "./community-see-all/community-see-all";
import s from "./community.module.scss"

export default function Community() {
   return (
      <div className={s.community}>
            <section className={s.container}>
                <h1 className={s.title}>Сообщество</h1>
                <p className={s.subtitle}>Тысячи учёных уже предлагают свою помощь</p>
                <CommunityList />
            </section>
            <CommunitySeeAll />
      </div>
   )
}
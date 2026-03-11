export type TCommunityItemProps = {
   item : TCommunityItem
}

export type TCommunityCategoryProps = {
   item: TCommunityCategories
}

export type TCommunityKeyProps = {
   item: TCommunityKeys
}

export type TCommunityItem = {
   id: string,
   categories: Array<TCommunityCategories>,
   headline: string,
   comment: string,
   reward: string,
   keys: Array<TCommunityKeys>,
   author: TCommunityAuthor

}

export type TCommunityCategories = {
   id: string,
   text: string,
   color: string
}

export type TCommunityKeys = {
   id: string,
   text: string,
}

export type TCommunityAuthor = {
   name: string,
   degree: string,
   education: string
}
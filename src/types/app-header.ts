
export type TAppHeaderNavSiteItem = {
   text: string
}

export type TAppHeaderNavUserItem = {
   type: "text" | "icon";
   text?: string;
   icon?: string;
}

export type TAppHeaderInsertItem = {
   type: "link" | "btn";
   text: string;
}
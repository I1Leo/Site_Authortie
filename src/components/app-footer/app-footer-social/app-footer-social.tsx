import { TAppFooterSocialProps } from "../../../types/app-footer";

export default function AppFooterSocial({img} : TAppFooterSocialProps) {
   return (
      <li>
         <img  src={img} alt=""/>
      </li>
   )
}
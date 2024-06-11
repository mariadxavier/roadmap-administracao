import { AsideMenu } from "../components/AsideMenu";
import { FooterMenu } from "../components/FooterMenu";
import { Outlet } from "react-router-dom";

export function Principal() {
  
    return (
      <div className="flex">
        <AsideMenu/>
        <Outlet/>
        <FooterMenu/>
      </div>
          
  );
}

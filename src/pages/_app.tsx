import type { AppProps } from "next/app";
import "../css/default.css";
import "../css/variables.css";
import "../css/dark-mode.css";
import "../css/topbar.css";
import "../css/sidebar.css";
import "../css/left-sidebar.css";
import "../css/right-sidebar.css";
import "../css/main-body.css";
import "../css/nav-arrow.css";
import "../css/clamp-content.css";
import "../css/media-list.css";
import Topbar from "../tsx/Topbar";
import LeftSidebar from "../tsx/LeftSidebar";
import RightSidebar from "../tsx/RightSidebar";
import NavArrow from "../tsx/NavArrow";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <LeftSidebar />
      <RightSidebar />
      <Component {...pageProps} />
      <NavArrow />
      <hr className="hr-hide-1180" />
    </>
  );
}

import type { AppProps } from "next/app";
import "../css/globals.css";
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

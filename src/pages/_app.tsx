import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import "../css/globals.css";
import Topbar from "../tsx/Topbar";
import LeftSidebar from "../tsx/LeftSidebar";
import RightSidebar from "../tsx/RightSidebar";
import NavArrow from "../tsx/NavArrow";
import VisitCounter from "../tsx/VisitCounter";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Topbar />
      <LeftSidebar />
      <RightSidebar />
      <Component {...pageProps} />
      <VisitCounter />
      <NavArrow />
      <hr className="hr-hide-1180" />
    </div>
  );
}

import React from "react";
import MediaList from "./MediaList";


type MediaOverviewProps = {
  title: string;        // page title ("My Experiences")
  sectionTitle: string; // e.g. "About"
  header: string;       // e.g. "Experiences"
};


export default function MediaOverview({
  title,
  sectionTitle,
  header,
}: MediaOverviewProps) {
  return (
    <div id="page-media-overview" className="w3-main">
      <section id="overview" className="w3-container">
        <h2>
          <b>{title}</b>
        </h2>
        <MediaList sectionTitle={sectionTitle} header={header} />
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LEFT_SIDEBAR_LINKS, LinkEntry } from "../ts/leftSidebar";
import ImageLoader from "./ImageLoader";
import VideoLoader from "./VideoLoader";


type MediaListProps = {
  sectionTitle: string; // e.g. "About"
  header: string;       // e.g. "Experiences"
};


export default function MediaList({ sectionTitle, header }: MediaListProps) {
  const router = useRouter();
  const currentUrl = router.pathname; // same role as page.url in Jekyll

  const section = LEFT_SIDEBAR_LINKS[sectionTitle];
  const headerEntry = section?.sublinks?.[header];
  const itemsRecord: Record<string, LinkEntry> = headerEntry?.sublinks ?? section?.sublinks ?? {};

  const entries = Object.entries(itemsRecord);

  const renderThumb = (cover?: string) => {
    if (!cover) return null;

    // If it looks like an image file, use ImageLoader; otherwise treat as video.
    const isImage = /\.(png|jpe?g|gif|webp|svg)$/i.test(cover);

    if (isImage) {
      return (
        <ImageLoader
          file={cover}
          className="media-thumb"
          cssWidth="100%"
        />
      );
    }

    return (
      <VideoLoader
        file={cover}
        className="media-thumb"
        cssWidth="100%"
      />
    );
  };

  const stripHtml = (text?: string) =>
    text ? text.replace(/<[^>]*>/g, "") : "";

  return (
    <ul className="media-list">
      {entries.map(([itemTitle, itemInfo]) => {
        const itemUrl = itemInfo.url;
        const itemCover = itemInfo.cover;
        const itemExcerpt = itemInfo.excerpt;

        // {% unless item_url == page.url %} ... {% endunless %}
        if (itemUrl === currentUrl) return null;

        return (
          <li key={itemTitle} className="media-item">
            <Link href={itemUrl} className="media-link">
              <div className="w3-row media-card">
                <div className="w3-col s4 m4">
                  {renderThumb(itemCover)}
                </div>
                <div className="w3-col s8 m8">
                  <h4 className="media-title">
                    <b>{itemTitle}</b>
                  </h4>
                  <h6 className="media-excerpt">
                    {stripHtml(itemExcerpt)}
                  </h6>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

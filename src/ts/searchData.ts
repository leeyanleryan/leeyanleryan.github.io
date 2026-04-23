import { LEFT_SIDEBAR_LINKS } from "./leftSidebar";


export type SearchItem = {
  label: string;         // what user sees in dropdown
  title: string;         // actual page/link name
  parentTitle?: string;  // e.g. "Projects"
  url: string;
  excerpt?: string;
};


export function buildSearchData(): SearchItem[] {
  const items: SearchItem[] = [];

  Object.entries(LEFT_SIDEBAR_LINKS).forEach(([sectionTitle, sectionInfo]) => {
    items.push({
      label: sectionTitle,
      title: sectionTitle,
      url: sectionInfo.url,
      excerpt: sectionInfo.excerpt,
    });

    if (sectionInfo.sublinks) {
      Object.entries(sectionInfo.sublinks).forEach(([subTitle, subInfo]) => {
        items.push({
          label: `${sectionTitle}: ${subTitle}`,
          title: subTitle,
          parentTitle: sectionTitle,
          url: subInfo.url,
          excerpt: subInfo.excerpt,
        });
      });
    }
  });

  return items;
}


export const SEARCH_DATA: SearchItem[] = buildSearchData();


export function rankSearchItem(item: SearchItem, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return -1;

  const label = item.label.toLowerCase();
  const title = item.title.toLowerCase();
  const parentTitle = item.parentTitle?.toLowerCase() ?? "";
  const url = item.url.toLowerCase();
  const excerpt = item.excerpt?.toLowerCase() ?? "";

  // Highest priority: exact title match
  if (title === q) return 100;

  // Then exact label match
  if (label === q) return 95;

  // Then title starts with query
  if (title.startsWith(q)) return 90;

  // Then label starts with query
  if (label.startsWith(q)) return 85;

  // Then title includes query
  if (title.includes(q)) return 80;

  // Then parent title includes query
  if (parentTitle.includes(q)) return 70;

  // Then URL includes query
  if (url.includes(q)) return 60;

  // Then excerpt includes query
  if (excerpt.includes(q)) return 50;

  return -1;
}
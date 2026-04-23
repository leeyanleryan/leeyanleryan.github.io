import Link from "next/link";
import { useRouter } from "next/router";
import { LEFT_SIDEBAR_LINKS, LinkEntry } from "../ts/leftSidebar";

type FlatNavItem = {
  label: string;
  url: string;
};

function flattenSidebarLinks(
  links: Record<string, LinkEntry>
): FlatNavItem[] {
  const flat: FlatNavItem[] = [];

  Object.entries(links).forEach(([title, info]) => {
    flat.push({
      label: title,
      url: info.url,
    });

    if (info.sublinks) {
      Object.entries(info.sublinks).forEach(([subTitle, subInfo]) => {
        flat.push({
          label: subTitle,
          url: subInfo.url,
        });
      });
    }
  });

  return flat;
}

export default function NavArrow() {
  const router = useRouter();
  const pathname = router.pathname;

  const flatLinks = flattenSidebarLinks(LEFT_SIDEBAR_LINKS);

  const currentIndex = flatLinks.findIndex((item) => item.url === pathname);

  if (currentIndex === -1 || flatLinks.length === 0) {
    return null;
  }

  const leftIndex =
    currentIndex === 0 ? flatLinks.length - 1 : currentIndex - 1;
  const rightIndex =
    currentIndex === flatLinks.length - 1 ? 0 : currentIndex + 1;

  const leftItem = flatLinks[leftIndex];
  const rightItem = flatLinks[rightIndex];

  return (
    <>
      {/* Desktop arrows */}
      <Link href={leftItem.url} className="nav-arrow nav-arrow-left w3-hide-small">
        <div className="nav-label">{leftItem.label}</div>
        <i className="arrow-symbol fa fa-angle-double-left"></i>
      </Link>

      <Link href={rightItem.url} className="nav-arrow nav-arrow-right w3-hide-small">
        <div className="nav-label">{rightItem.label}</div>
        <i className="arrow-symbol fa fa-angle-double-right"></i>
      </Link>

      {/* Bottom bar for small screens */}
      <div className="nav-bottom">
        <Link href={leftItem.url}>
          <i className="fa fa-angle-double-left"></i>
          {"\u00A0"}
          {leftItem.label}
        </Link>

        <Link href={rightItem.url}>
          {rightItem.label}
          {"\u00A0"}
          <i className="fa fa-angle-double-right"></i>
        </Link>
      </div>
    </>
  );
}
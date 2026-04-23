import Link from "next/link";
import { useRouter } from "next/router";
import { openSidebar } from "../ts/topbar";
import { LinkEntry, LEFT_SIDEBAR_LINKS } from "../ts/leftSidebar";


export default function LeftSidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  function renderHeader(title: string, info: LinkEntry) {
    const isActive = pathname === info.url;

    // Submenu should be "open" when we're on the header page
    // OR on any of its subpages (old behavior: page.url contains header_url)
    const isOpen =
      pathname === info.url ||
      (info.url !== "/" && pathname.startsWith(info.url + "/"));

    if (info.sublinks) {
      return (
        <div
          key={title}
          className={`submenu-wrapper ${isOpen ? "open" : ""}`}
        >
          <div className="submenu-header">
            <Link
              href={info.url}
              className={`w3-bar-item w3-button w3-padding main-link ${
                isActive ? "active" : ""
              }`}
            >
              {title}
            </Link>
          </div>
          <div className="submenu">
            {Object.entries(info.sublinks).map(([subTitle, subInfo]) => {
              // Mirror `{% unless subheader_url == header_url %}` from the old template
              if (subInfo.url === info.url) {
                return null;
              }

              const isSubActive = pathname === subInfo.url;

              return (
                <Link
                  key={subTitle}
                  href={subInfo.url}
                  className={`w3-bar-item w3-button w3-padding ${
                    isSubActive ? "active" : ""
                  }`}
                >
                  {subTitle}
                </Link>
              );
            })}
          </div>
        </div>
      );
    }

    // Simple header without submenu
    return (
      <Link
        key={title}
        href={info.url}
        className={`w3-bar-item w3-button w3-padding sidebar-link-indent ${
          isActive ? "active" : ""
        }`}
      >
        {title}
      </Link>
    );
  }

  return (
    <>
      <nav id="left-sidebar" className="sidebar">
        <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              src="/img/ares-sofa2.png"
              alt="Ares"
              className="w3-circle w3-margin-right profile-picture-icon"
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>
              Lee Yan Le, <strong>Ryan</strong>
            </span>
            <br />
            <a
              href="https://github.com/leeyanleryan"
              className="w3-bar-item w3-button"
              title="GitHub"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/leeyanleryan"
              className="w3-bar-item w3-button"
              title="LinkedIn"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@Leehai"
              className="w3-bar-item w3-button"
              title="YouTube"
              target="_blank"
            >
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
        <hr className="hr-sidebar" />
        {Object.entries(LEFT_SIDEBAR_LINKS).map(
          ([sectionTitle, sectionInfo]) => {
            if (sectionInfo.sublinks) {
              return (
                // <div key={sectionTitle}>
                //   <div className="w3-container">
                //     <div className="w3-bar-block">
                //       <h4>
                //         <strong>{sectionTitle}</strong>
                //       </h4>
                //       {Object.entries(sectionInfo.sublinks).map(
                //         ([headerTitle, headerInfo]) =>
                //           renderHeader(headerTitle, headerInfo)
                //       )}
                //     </div>
                //   </div>
                //   <hr className="hr-sidebar" />
                // </div>

                // <div key={sectionTitle}>
                //   <div className="w3-container">
                //     <div className="w3-bar-block">
                //       <Link
                //         href={sectionInfo.url}
                //         className={`w3-bar-item w3-button w3-padding sidebar-section-link ${
                //           pathname === sectionInfo.url ? "active" : ""
                //         }`}
                //       >
                //         <strong>{sectionTitle}</strong>
                //       </Link>
                //       {Object.entries(sectionInfo.sublinks).map(([headerTitle, headerInfo]) =>
                //         renderHeader(headerTitle, headerInfo)
                //       )}
                //     </div>
                //   </div>
                //   <hr className="hr-sidebar" />
                // </div>

                <div key={sectionTitle}>
                  <div className="w3-container sidebar-menu-section">
                    <div className="w3-bar-block">
                      <Link
                        href={sectionInfo.url}
                        className={`w3-bar-item w3-button w3-padding sidebar-section-link ${
                          pathname === sectionInfo.url ? "active" : ""
                        }`}
                      >
                        <strong>{sectionTitle}</strong>
                      </Link>
                      {Object.entries(sectionInfo.sublinks).map(([headerTitle, headerInfo]) =>
                        renderHeader(headerTitle, headerInfo)
                      )}
                    </div>
                  </div>
                  <hr className="hr-sidebar" />
                </div>
              );
            } else {
              const isSectionActive = pathname === sectionInfo.url;
              return (
                // <div key={sectionTitle}>
                //   <div className="w3-container">
                //     <div className="w3-bar-block">
                //       <Link
                //         href={sectionInfo.url}
                //         className={`w3-bar-item w3-button w3-padding ${
                //           isSectionActive ? "active" : ""
                //         }`}
                //       >
                //         {sectionTitle}
                //       </Link>
                //     </div>
                //   </div>
                //   <hr className="hr-sidebar" />
                // </div>

                <div key={sectionTitle}>
                  <div className="w3-container sidebar-menu-section">
                    <div className="w3-bar-block">
                      <Link
                        href={sectionInfo.url}
                        className={`w3-bar-item w3-button w3-padding sidebar-link-indent ${
                          isSectionActive ? "active" : ""
                        }`}
                      >
                        {sectionTitle}
                      </Link>
                    </div>
                  </div>
                  <hr className="hr-sidebar" />
                </div>
              );
            }
          }
        )}
        <hr className="hr-sidebar-invisible" />
        <hr className="hr-sidebar-invisible" />
      </nav>

      <div
        id="sidebar-overlay"
        className="w3-overlay overlay-under-1181 close-side-menu"
        onClick={() => openSidebar()}
        title="close side menu"
      ></div>
    </>
  );
}

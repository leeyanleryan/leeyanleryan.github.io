export type LinkEntry = {
  url: string;
  cover?: string;
  excerpt?: string;
  sublinks?: Record<string, LinkEntry>;
};


export const LEFT_SIDEBAR_LINKS: Record<string, LinkEntry> = {
  "Home": {
    url: "/"
  },
  "Projects": {
    url: "/projects",
    sublinks: {
      "Orbital NUqueSt": {
        url: "/projects/orbital-nuquest",
        cover: "nuquest-gameplay2",
        excerpt: "A 2D top-down action-adventure game in Unity to gamify NUS courses."
      },
      "Data Analysis": {
        url: "/projects/data-analysis",
        cover: "dataanalysis-bca-heatmap1.png",
        excerpt: "Compilation of various data analysis projects using Machine Learning."
      },
      "Board Games": {
        url: "/projects/board-games",
        cover: "boardgames-chess2",
        excerpt: "Offline Board Games with UI and AI."
      },
      "Puzzle Solvers": {
        url: "/projects/puzzle-solvers",
        cover: "puzzlesolvers-sudoku1",
        excerpt: "Automated Sudoku solver using Computer Vision and AI search."
      },
      "Leerically": {
        url: "/projects/leerically",
        cover: "leerically-home-page.png",
        excerpt: "A web app for lyrics translations, breakdowns and interpretations of songs."
      }
    }
  },
  "Experiences": {
    url: "/experiences",
    sublinks: {
      "Digital Production Assistant": {
        url: "/experiences/digital-production-assistant",
        cover: "dpa-animation1",
        excerpt: "Created engaging educational videos on Machine Learning, Artificial Intelligence, and Deep Learning."
      },
      "Teaching Assistant": {
        url: "/experiences/teaching-assistant",
        cover: "ta-animation1",
        excerpt: "Taught CS1010E Programming Methodology to 25 undergraduates."
      }
    }
  },
  "Others": {
    url: "/others",
    sublinks: {
      "Awards": {
        url: "/others/awards",
        cover: "ares-sofa.png",
        excerpt: "A list of my awards and certifications."
      },
      "Hobbies": {
        url: "/others/hobbies",
        cover: "achievements-osu1.png",
        excerpt: "A list of my hobbies and interests outside of work and academics."
      }
    }
  }
};


// export function getLeftSidebarLinks(): Record<string, LinkEntry> {
//   return LEFT_SIDEBAR_LINKS;
// }
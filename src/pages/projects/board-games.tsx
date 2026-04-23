import ImageLoader from "@/tsx/ImageLoader";
import VideoLoader from "@/tsx/VideoLoader";


export default function BoardGames() {
  return (
    <>
      <div id="page-about-projects" className="w3-main">
        <section id="board-games" className="w3-container">
          <h2><b>Board Games</b> (<a href="https://github.com/leeyanleryan/Board-Games" target="_blank">Link</a>)</h2>
          <h5 className="h5-text-gap">
            This project was created out of an interest in exploring how artificial intelligence (AI) can be applied to board games, which require varying levels 
            of strategic thinking and logic.
          </h5>
          <h3><u>Chess (<a href="https://github.com/leeyanleryan/Board-Games/tree/main/Chess%20(C%2B%2B)/Chess" target="_blank">Link</a>)</u></h3>
          <div className="media-display">
            <VideoLoader file="boardgames-chess1" fileWidth={800} fileHeight={638} cssWidth="50%" />
            <VideoLoader file="boardgames-chess2" fileWidth={800} fileHeight={638} cssWidth="50%" />
          </div>
          <h5 className="h5-text-gap">
            I developed the game logic and user interface for Chess using Qt Creator, an IDE for creating and deploying applications. The code is done in C++ 
            to achieve faster runtimes and enhance my AI's efficiency. 
          </h5>
          <h5 className="h5-text-gap">
            I chose to make an AI for Chess because I believe there is still room for improvement in leading Chess AIs. For instance, Stockfish can reach depths 
            of 100 but often draws games against itself or other AIs. My aim is for my AI bot to prioritize winning, rather than settling for draws.
          </h5>
          <h5 className="h5-text-gap">
            Current level of AI: Incomplete
          </h5>
          <h3><u>Connect Four (<a href="https://github.com/leeyanleryan/Board-Games/tree/main/Connect%204%20(Java)" target="_blank">Java Link</a> | <a href="https://github.com/leeyanleryan/Board-Games/tree/main/Connect%204%20(Python)" target="_blank">Python Link</a>)</u></h3>
          <div className="media-display">
            <VideoLoader file="boardgames-connectfour1" fileWidth={462} fileHeight={370} cssWidth="53%" />
            <VideoLoader file="boardgames-connectfour2" fileWidth={406} fileHeight={380} cssWidth="45.4%" />
          </div>
          <h5 className="h5-text-gap">
            I developed the game logic and user interface for Connect Four in two languages: Java (using Swing and AWT) and Python (using Qt5).
          </h5>
          <h5 className="h5-text-gap">
            I decided to build a Connect Four AI first, believing it would be simpler than creating an AI for Chess. This process would also help me gain insights 
            into the challenges I would face when developing a Chess AI.
          </h5>
          <h5>
            Current level of AI: Incomplete
          </h5>
        </section>
      </div>
    </>
  );
}
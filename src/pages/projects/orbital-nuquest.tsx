import ImageLoader from "@/tsx/ImageLoader";
import VideoLoader from "@/tsx/VideoLoader";


export default function OrbitalNUqueSt() {
  return (
    <>
      <div id="page-about-projects" className="w3-main">
        <section id="orbital-nuquest" className="w3-container">
          <h2><b>Orbital NUqueSt</b> (<a href="https://github.com/leeyanleryan/Orbital-NUqueSt" target="_blank">Link</a>)</h2>
          <div className="media-display">
            <VideoLoader file="nuquest-gameplay1" fileWidth={400} fileHeight={300} cssWidth="33%" />
            <VideoLoader file="nuquest-gameplay2" fileWidth={400} fileHeight={300} cssWidth="33%" />
            <VideoLoader file="nuquest-gameplay3" fileWidth={400} fileHeight={300} cssWidth="33%" />
          </div>
          <h5 className="h5-img-gap">
              NUqueSt is a 2D Top-Down Action-Adventure Singleplayer Questing game. It was heavily inspired by Stardew Valley, incorporating core gameplay elements
            such as fighting, farming and mining. It features 3 different biomes, 8 Non-Playable-Characters (NPCs), 6 ores, 3 enemies, 1 boss and 40 quests.
          </h5>
          <div className="media-display">
            <VideoLoader file="nuquest-quest1" fileWidth={400} fileHeight={300} cssWidth="50%" />
            <VideoLoader file="nuquest-quest2" fileWidth={400} fileHeight={300} cssWidth="50%" />
          </div>
          <h5 className="h5-img-gap">
            The main purpose of creating NUqueSt was to help familiarise incoming undergraduates with the challenges of various courses in a fun and interactive way.
            We achieved this by gamifying each course into a quest. For example, the computing course “CS1010” became an N-Queens puzzle, where players had to provide 
            two valid configurations for placing 6 queens on a 6x6 board. These quests are given by the NPCs, and reward the player with GPA upon completion.
          </h5>
          <div className="media-display">
            <ImageLoader file="nuquest-poster1-900.jpg" fileWidth={900} fileHeight={1300} cssWidth="24.5%" />
            <ImageLoader file="nuquest-poster2-900.jpg" fileWidth={900} fileHeight={1300} cssWidth="24.5%" />
            <ImageLoader file="nuquest-poster3-900.jpg" fileWidth={900} fileHeight={1300} cssWidth="24.5%" />
            <ImageLoader file="nuquest-poster4-900.jpg" fileWidth={900} fileHeight={1300} cssWidth="24.5%" />
          </div>
          <h5 className="h5-img-gap">
              My friend
            <a href="https://github.com/thawtunzan" target="_blank">
              Thaw</a> and I developed NUqueSt for CP2106 (Orbital), a three-month software engineering course at NUS during AY22/23 Special Term. We followed 
              an agile methodology with monthly sprints. Each sprint began with planning feasible features and ended with peer reviews, alongside the creation of a 
              poster and video to showcase the project. We then incorporated feedback in subsequent sprints, guiding us toward the right direction.
          </h5>
          <div className="media-display">
            <ImageLoader file="nuquest-certificate1.png" fileWidth={900} fileHeight={1300} cssWidth="40%" />
            <ImageLoader file="nuquest-certificate2.png" fileWidth={900} fileHeight={1300} cssWidth="40%" />
          </div>
          <h5>
            For our project, we were awarded Artemis (Extreme), the highest level of achievement, placing us roughly in the top 5% of the cohort. The link to the
            digital certificate can be found 
            <a href="https://credentials.nus.edu.sg/1fcad03a-4d76-43b8-9544-702f537b3d6e#acc.eo5gw2x1" target="_blank">here</a>.
          </h5>
        </section>
      </div>
    </>
  );
}
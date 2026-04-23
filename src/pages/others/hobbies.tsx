import ImageLoader from "@/tsx/ImageLoader";
// import VideoLoader from "@/tsx/VideoLoader";


export default function BoardGames() {
  return (
    <>
      <div id="page-about-hobbies" className="w3-main">
        <section id="reading" className="w3-container">
          <h2><b>Reading</b></h2>
          <h5 className="h5-text-gap">
            I like reading both fiction and non-fiction. Recommend me some books to read!
          </h5>
          <h5>
            Books read:
            <ul className="ul-margin-top-0">
              <li>Harry Potter and the Sorcerer&apos;s Stone</li>
              <li>Harry Potter and the Chamber of Secrets</li>
              <li>Harry Potter and the Prisoner of Azkaban</li>
              <li>Harry Potter and the Goblet of Fire</li>
              <li>Harry Potter and the Order of the Phoenix</li>
              <li>Harry Potter and the Half-Blood Prince</li>
              <li>Harry Potter and the Deathly Hallows</li>
              <li>The Hobbit</li>
              <li>Lord of the Rings: The Fellowship of the Ring</li>
              <li>Lord of the Rings: The Two Towers</li>
              <li>Lord of the Rings: The Return of the King</li>
              <li>The Calico Cat at the Chibineko Kitchen</li>
            </ul>
          </h5>
        </section>

        <hr className="hr-main-body" />

        <section id="gaming" className="w3-container">
          <h2><b>Gaming</b></h2>
          <h3><u>Rocket League</u></h3>
          <div className="media-display">
            <ImageLoader file="achievements-rocketleague1-900.jpg" fileWidth={900} fileHeight={506} cssWidth="74%" />
            <ImageLoader file="achievements-rocketleague2-900.jpg" fileWidth={900} fileHeight={1501} cssWidth="25%" />
          </div>
          <h5 className="h5-text-gap">
            <ul className="ul-margin-top-0">
              <li><a href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198148988256/overview" target="_blank">
                Rocket League Stat Tracker
              </a></li>
              <li>Peak Rating: Grand Champion III Division I (1723 Rating), 28/01/2023</li>
              <li>Peak Ranking: Singapore Rank #1, 23/09/2018</li>
            </ul>
          </h5>
          <h3><u>Brawlhalla</u></h3>
          <div className="media-display">
            <ImageLoader file="achievements-brawlhalla1.png" fileWidth={900} fileHeight={506} cssWidth="90%" />
          </div>
          <h5 className="h5-text-gap">
            <ul className="ul-margin-top-0">
              <li><a href="https://corehalla.com/stats/player/8868631" target="_blank">
                Brawlhalla Stat Tracker
              </a></li>
              <li>Peak ELO: Valhallan (2302 ELO), 02/11/2024</li>
              <li>Peak Ranking: South-East Asia Rank #24, 02/11/2024</li>
            </ul>
          </h5>
          <h3><u>osu!</u></h3>
          <div className="media-display">
            <ImageLoader file="achievements-osu1.png" fileWidth={381} fileHeight={202} cssWidth="40%" />
            <ImageLoader file="achievements-osu2.png" fileWidth={1328} fileHeight={470} cssWidth="60%" />
          </div>
          <h5 className="h5-text-gap">
            <ul className="ul-margin-top-0">
              <li><a href="https://osu.ppy.sh/u/9317883" target="_blank">
                osu! Profile
              </a></li>
              <li>Peak PP Play: Epitaph (705pp), 25/06/2024</li>
              <li>Peak Ranking: Global Rank #2067, 30/09/2024</li>
            </ul>
          </h5>
          <h3><u>Marvel Rivals</u></h3>
          <div className="media-display">
            <ImageLoader file="achievements-marvelrivals1-900.jpg" fileWidth={900} fileHeight={507} cssWidth="90%" />
          </div>
          <h5 className="h5-text-gap">
            <ul className="ul-margin-top-0">
              <li><a href="https://tracker.gg/marvel-rivals/profile/ign/Leehai/overview" target="_blank">
                Marvel Rivals Stat Tracker
              </a></li>
              <li>Peak RS: Grandmaster III (4504 RS), 13/03/2025</li>
            </ul>
          </h5>
          <h3><u>Valorant</u></h3>
          <div className="media-display">
            <ImageLoader file="achievements-valorant1-900.jpg" fileWidth={900} fileHeight={506} cssWidth="90%" />
          </div>
          <h5>
            <ul className="ul-margin-top-0">
              <li><a href="https://tracker.gg/valorant/profile/riot/lee%239975/overview?season=all" target="_blank">
                Valorant Stat Tracker
              </a></li>
              <li>Peak Rating: Diamond I, 04/08/2022</li>
            </ul>
          </h5>
        </section>
        
        <hr className="hr-main-body" />

        <section id="piano" className="w3-container">
          <h2><b>Piano</b></h2>
          <h5 className="h5-text-gap">
            I am self-taught. I learn from watching MIDI covers on YouTube.
          </h5>
          <h5>
            Pieces learnt:
            <ul className="ul-margin-top-0">
              <li>Canon in D</li>
              <li>River Flows in You</li>
              <li>Fur Elise</li>
              <li>Hollow Knight</li>
              <li>Wet Hands</li>
            </ul>
          </h5>
        </section>
      </div>
    </>
  );
}
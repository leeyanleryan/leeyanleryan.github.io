import ImageLoader from "@/tsx/ImageLoader";
import VideoLoader from "@/tsx/VideoLoader";


export default function Profile() {
  return (
    <>
      <div id="page-about-experiences" className="w3-main">
        <section id="digital-production-assistant" className="w3-container">
          <h2><b>Digital Production Assistant</b></h2>
          <div className="media-display">
            <VideoLoader file="dpa-intro1" fileWidth={800} fileHeight={450} cssWidth="32%" />
            <VideoLoader file="dpa-intro2" fileWidth={800} fileHeight={450} cssWidth="32%" />
            <VideoLoader file="dpa-intro3" fileWidth={800} fileHeight={450} cssWidth="32%" />
          </div>
          <h5 className="h5-text-gap">
            I collaborated with 3 professors and 2 other digital production assistants on producing engaging
            educational videos on Generative AI and Machine Learning. These videos are made for courses published
            under NUS Blended Learning 2.0, to be used by NUS professors and staff to gain relevant knowledge on 
            recent AI/ML advancements.
          </h5>
          <h5 className="h5-text-gap">
            The general workflow starts from understanding lecture slides made by the professors, converting them 
            into slides that are simple to understand, as well as integrating PowerPoint animations and transitions 
            to convey information better. Afterwards, we used Camtasia to mix the voice recordings and slides together,
            ensuring that volume levels stay consistent throughout the video. Lastly, we added captions using Descript,
            which are stored in .srt files so that the viewer can disable and enable captions whenever needed.
          </h5>
          <h5>
            Topics contributed:
            <ul className="ul-margin-top-0">
              <li>Prompt Engineering for Large Language Models</li>
              <li>Introduction to Generative AI</li>
              <li>k-Nearest Neighbors</li>
              <li>Decision Tree</li>
              <li>Convolutional Neural Networks</li>
              <li>Recurrent Neural Networks</li>
            </ul>
          </h5>
        </section>
      </div>
    </>
  );
}
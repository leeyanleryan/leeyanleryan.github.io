import ImageLoader from "@/tsx/ImageLoader";
// import VideoLoader from "@/tsx/VideoLoader";


export default function Profile() {
  return (
    <>
      <div id="page-about" className="w3-main">
        <section id="profile" className="w3-container">
          <h2><b>Profile</b></h2>
          <div className="media-display">
            <ImageLoader file="mt-fuji-900.jpg" fileWidth={900} fileHeight={480} cssWidth="100%" />
          </div>
          <h5 className="h5-text-gap">
            Hi! Welcome to my website. My name is Ryan Lee, and I am currently an undergraduate at National University of Singapore (NUS), studying
            Data Science and Analytics. In the near future, I am hoping to undertake a Masters or PhD programme to dive deeper into my topics of interests.
          </h5>
          <h5 className="h5-text-gap">
            I have a deep passion for Artificial Intelligence and Machine Learning, which I explore in my projects. For my &apos;Board Games&apos; projects, I design the
            game logic for several board games such as Chess, allowing me to implement AI into enemy bots. For my &apos;Data Analysis&apos; projects, I employ several 
            Machine Learning algorithms onto datasets for analysis and predictions.
          </h5>
          <h5 className="h5-text-gap">
            My hobbies include reading, playing computer games, playing piano and walking. In the &apos;Hobbies&apos; section, I showcase rankings I have achieved 
            across various competitive games.
          </h5>
          <h5>
            If you would like to find out more about me, you can navigate to different sections by clicking on the arrows on the left or right, or use the
            menu button at the top-left of the page.
          </h5>
        </section>
        
        <hr className="hr-main-body" />

        <section id="resume" className="w3-container">
          <h2><b>Resume</b></h2>
          <h5>
            <a href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">Preview</a>&nbsp;|&nbsp;
            <a href="/pdf/resume.pdf" download>Download</a>
          </h5>
        </section>

        <hr className="hr-main-body" />

        <section id="contact" className="w3-container">
          <h2><b>Contact</b></h2>
          <h5>
            <ul>
              <li>Email: leeyanleryan.21@gmail.com</li>
              <li>Discord: leeyanleryan</li>
            </ul>
          </h5>
        </section>
      </div>
    </>
  );
}
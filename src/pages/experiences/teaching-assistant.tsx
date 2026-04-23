import ImageLoader from "@/tsx/ImageLoader";
import VideoLoader from "@/tsx/VideoLoader";


export default function Profile() {
  return (
    <>
      <div id="page-about-experiences" className="w3-main">
        <section id="teaching-assistant" className="w3-container">
          <h2><b>Teaching Assistant</b></h2>
          <div className="media-display">
            <VideoLoader file="ta-animation1" fileWidth={800} fileHeight={450} cssWidth="49%" />
            <VideoLoader file="ta-animation2" fileWidth={800} fileHeight={450} cssWidth="49%" />
          </div>
          <h5 className="h5-text-gap">
            I taught 25 NUS undergraduates CS1010E, a course on programming methodology in Python. The course
            educates students from the ground up, allowing those with no programming background to acquire computational
            skills at a moderate pace while having fun. 
          </h5>
          <h5 className="h5-img-gap">
            I incorporated animations and transitions learnt from my digital production assistant role into the PowerPoint
            slides. This allowed me to better visualise the flow of the code to bridge learning gaps. The animations also
            helped in keeping the students engaged in looking at the slides, as it would capture their attention.
          </h5>
          <div className="media-display">
            <ImageLoader file="ta-icebreaker1.jpg" fileWidth={960} fileHeight={1280} cssWidth="24.1%" />
            <ImageLoader file="ta-icebreaker2.jpg" fileWidth={960} fileHeight={1280} cssWidth="24.1%" />
            <ImageLoader file="ta-icebreaker3.jpg" fileWidth={960} fileHeight={1280} cssWidth="24.1%" />
            <ImageLoader file="ta-icebreaker4.jpg" fileWidth={960} fileHeight={1280} cssWidth="24.1%" />
          </div>
          <h5 className="h5-img-gap">
          For their first lesson, I conducted the 'Spaghetti Tower' icebreaker challenge as a way to convey the analogy 
          that coding is an iterative process. The goal of the challenge was to make the tallest tower using spaghetti
          sticks and marshmallow. The students were split into 4 different groups, each building unique structures. The
          tallest tower was around 50cm.
          </h5>
          <div className="media-display">
            <ImageLoader file="ta-reviews1.png" fileWidth={670} fileHeight={422} cssWidth="46%" />
            <ImageLoader file="ta-reviews2.png" fileWidth={780} fileHeight={422} cssWidth="53%" />
          </div>
          <h5 className="h5-text-gap">
          I received 9 nominations for teaching excellence, as well as better reviews on average compared to several
          departments, showing the efficiency of my teaching. The feedback report can be found&nbsp;
          <a href="/pdf/cs1010e-feedback.pdf" target="_blank">here</a>.
          </h5>
          <h5>
            Topics taught:
            <ul className="ul-margin-top-0">
              <li>Variables</li>
              <li>Expressions</li>
              <li>Functions</li>
              <li>Iteration</li>
              <li>Recursion</li>
              <li>Sequences</li>
              <li>Higher Order Functions</li>
              <li>File I/O</li>
              <li>Multi-Dimensional Arrays</li>
              <li>Object-Oriented Programming</li>
              <li>Searching</li>
              <li>Sorting</li>
              <li>Time/Space Complexity</li>
              <li>Exceptions</li>
            </ul>
          </h5>
        </section>
      </div>
    </>
  );
}
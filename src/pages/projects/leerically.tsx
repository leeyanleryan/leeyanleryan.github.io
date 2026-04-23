import ImageLoader from "@/tsx/ImageLoader";
// import VideoLoader from "@/tsx/VideoLoader"


export default function Leerically() {
  return (
    <>
      <div id="page-about-projects" className="w3-main">
        <section id="leerically" className="w3-container">
          <h2><b>Leerically (<a href="https://www.github.com/leeyanleryan/leerically">Link</a>)</b></h2>
          <div className="media-display">
            <ImageLoader file="leerically-home-page.png" fileWidth={800} fileHeight={450} cssWidth="80%" />
          </div>
          <h5 className="h5-text-gap">
            I frequently listen to music of varying languages. More often than not, it is difficult to find a
            website that includes original text, romanised text, and English translation. Thus, I decided to make
            a dedicated website called <a href="https://leerically.com">Leerically</a> for lyrics translations, breakdowns and interpretations of songs.
          </h5>
          <h5 className="h5-text-gap">
            A feature my website provides unlike other websites is an explanation box that can be viewed when
            clicking on any part of the lyrics. This explanation box breaks down each word, providing the romanised
            word and English meaning. This gives the reader some understanding on how I translated the sentence.
          </h5>
          <h5 className="h5-text-gap">
            Another unique feature I implemented is the &quot;Test&quot; section at the bottom of a song&apos;s lyrics. It pulls 
            random sentences from the song, highlights a specific word or phrase from it, and asks the user
            to determine the English meaning or function of the highlighted word. This helps users in further
            understanding the words used in the song.
          </h5>
          <h5>
            Because I have to break down the sentence and provide explanations, I occassionally find errors in 
            transcriptions provided from online sources. So, I believe my website is great in providing accurate 
            translations.
          </h5>
        </section>
      </div>
    </>
  );
}
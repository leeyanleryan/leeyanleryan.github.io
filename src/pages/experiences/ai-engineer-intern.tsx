import Head from "next/head";
import ImageLoader from "@/tsx/ImageLoader";
// import VideoLoader from "@/tsx/VideoLoader";


export default function AIEngineerIntern() {
  return (
    <>
      <Head>
        <title>Ryan Lee | AI Engineer Intern</title>
        <meta
          name="description"
          content="Details about my experience as an AI Engineer Intern at Synapxe."
        />
      </Head>
      <div id="page-about-experiences" className="w3-main">
        <section id="ai-engineer-intern" className="w3-container">
          <h2><b>AI Engineer Intern</b></h2>

          <div className="media-display">
            <ImageLoader file="aimle-synapxe-building.jpg" fileWidth={1600} fileHeight={900} cssWidth="100%" />
          </div>

          <div className="image-credit">
            Picture credit: <a href="https://www.som.com/projects/biopolis-phase-6-at-one-north/" target="_blank" rel="noopener noreferrer">SOM</a>
          </div>

          <h5 className="h5-text-gap">
            During my internship at Synapxe, I worked on several AI/ML and data engineering projects in the healthcare domain, involving
            unauthorised data access detection, Retrieval-Augmented Generation, data loss prevention,
            and feature engineering optimisation. Most of my work involved building Python-based tools,
            testing different machine learning or NLP approaches, and improving existing systems so that
            they are faster, easier to use, and more reliable.
          </h5>

          <h5 className="h5-text-gap">
            One of my main projects was an unauthorised data access detection tool, which classifies
            authorised and unauthorised access to patients&apos; records. The records were flagged based on
            access time, login user role, and free-text explanations given by users. Since the explanation
            field was unstructured text, I explored NLP approaches such as spaCy, sentence-transformers,
            cosine similarity, K-Nearest Neighbours, Centroids, Support Vector Machines, Logistic Regression,
            Random Forest, and Naive Bayes to classify whether an explanation was acceptable or unacceptable.
          </h5>

          <h5 className="h5-text-gap">
            I also worked on deploying LightRAG on Azure App Service. LightRAG is a graph-based
            Retrieval-Augmented Generation framework that extracts entities and relations across document
            chunks, allowing it to answer relation-centric queries more effectively. During the deployment,
            I had to debug Azure App Service issues, resolve wheelhouse dependency problems, understand
            startup commands, and work with Azure development tools such as Bash and SSH to inspect deployed
            files directly.
          </h5>

          <h5 className="h5-text-gap">
            For the AI2D project, I helped optimise the feature building pipeline by migrating parts of the
            codebase from Pandas to Polars. I first studied the existing code flow, created flowcharts to
            understand the dependencies between files, then incrementally converted functions from the leaf
            nodes upwards. This reduced feature loading time from around 282 seconds to 22 seconds on a
            desktop, and from around 443 seconds to 78 seconds on a laptop.
          </h5>

          <h5 className="h5-text-gap">
            I also explored data loss prevention use cases using local LLMs through Ollama. I built a basic
            prototype that extracts personally identifiable information from strings, then improved the
            reliability of extraction through prompt engineering, such as tailoring instructions to
            Singapore-specific formats for phone numbers and other sensitive information.
          </h5>

          <h5>
            Projects contributed:
            <ul className="ul-margin-top-0">
              <li>Unauthorised Data Access Detection Tool</li>
              <li>LightRAG Deployment on Azure App Service</li>
              <li>AI2D Feature Building Optimisation with Polars</li>
              <li>Data Loss Prevention with Local LLMs</li>
              <li>Knowledge Transfer and Code Documentation</li>
            </ul>
          </h5>

          <h5>
            Technologies used:
            <ul className="ul-margin-top-0">
              <li>Python</li>
              <li>Pandas</li>
              <li>Polars</li>
              <li>NumPy</li>
              <li>scikit-learn</li>
              <li>spaCy</li>
              <li>sentence-transformers</li>
              <li>Ollama</li>
              <li>LightRAG</li>
              <li>Azure App Service</li>
              <li>Azure DevOps</li>
              <li>PyInstaller</li>
            </ul>
          </h5>
        </section>
      </div>
    </>
  );
}
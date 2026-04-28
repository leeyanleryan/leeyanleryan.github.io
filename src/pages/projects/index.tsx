import Head from "next/head";
import MediaOverview from "@/tsx/MediaOverview";


export default function Projects() {
  return (
    <>
      <Head>
        <title>Ryan Lee | Projects</title>
        <meta
          name="description"
          content="Overview of my projects."
        />
      </Head>
      <MediaOverview title="My Projects" sectionTitle="Projects" header="" />
    </>
  );
}
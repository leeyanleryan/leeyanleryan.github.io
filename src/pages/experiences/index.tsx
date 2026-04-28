import Head from "next/head";
import MediaOverview from "@/tsx/MediaOverview";


export default function Experiences() {
  return (
    <>
      <Head>
        <title>Ryan Lee | Experiences</title>
        <meta
          name="description"
          content="Overview of my work experiences."
        />
      </Head>
      <MediaOverview title="My Experiences" sectionTitle="Experiences" header="" />
    </>
  );
}
import Head from "next/head";
import MediaOverview from "@/tsx/MediaOverview";


export default function Others() {
  return (
    <>
      <Head>
        <title>Ryan Lee | Others</title>
        <meta
          name="description"
          content="Overview of my other works and interests."
        />
      </Head>
      <MediaOverview title="Others" sectionTitle="Others" header="" />
    </>
  );
}
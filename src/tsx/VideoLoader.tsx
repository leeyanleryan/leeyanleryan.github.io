import React from "react";


type VideoLoaderProps = {
  file: string;          // without extension, e.g. "nuquest-gameplay1"
  fileWidth?: number;
  fileHeight?: number;
  cssWidth?: string;
  className?: string;
};


const VideoLoader: React.FC<VideoLoaderProps> = ({
  file,
  fileWidth,
  fileHeight,
  cssWidth,
  className,
}) => {
  const style: React.CSSProperties = {};

  if (fileWidth && fileHeight) {
    style.aspectRatio = `${fileWidth}/${fileHeight}`;
  }

  if (cssWidth) {
    style.width = cssWidth;
    style.height = "auto";
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      width={fileWidth}
      height={fileHeight}
      style={style}
    >
      <source src={`/video/${file}.webm`} type="video/webm" />
      <source src={`/video/${file}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};


export default VideoLoader;

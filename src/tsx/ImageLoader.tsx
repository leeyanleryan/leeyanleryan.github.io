import React from "react";


type ImageLoaderProps = {
  file: string;
  fileWidth?: number;
  fileHeight?: number;
  cssWidth?: string;
  className?: string;
  alt?: string;
};


const ImageLoader: React.FC<ImageLoaderProps> = ({
  file,
  fileWidth,
  fileHeight,
  cssWidth,
  className,
  alt,
}) => {
  const style: React.CSSProperties = {};

  if (fileWidth && fileHeight) {
    // aspect-ratio: file_width/file_height;
    style.aspectRatio = `${fileWidth}/${fileHeight}`;
  }

  if (cssWidth) {
    // width: css_width; height:auto;
    style.width = cssWidth;
    style.height = "auto";
  }

  return (
    <img
      src={`/img/${file}`}
      className={className}
      width={fileWidth}
      height={fileHeight}
      style={style}
      decoding="async"
      alt={alt ?? file}
    />
  );
};


export default ImageLoader;
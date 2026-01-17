import { useEffect, useRef } from "react";

const LazyVideo = ({ src, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      video.src = src;
      video.play();
      observer.disconnect();
    });

    observer.observe(video);

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="none"
    />
  );
};

export default LazyVideo;

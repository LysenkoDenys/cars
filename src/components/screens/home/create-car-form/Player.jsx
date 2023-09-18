import { useRef } from "react";

const VideoPlayer = () => {
  const ref = useRef();

  const handlePlay = () => {
    ref.current.play();
  };

  const handlePause = () => {
    ref.current.pause();
  };

  return (
    <div className="player">
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <video
        // src="https://www.shutterstock.com/video/clip-1057927591-autumn-full-swing-sun-rays-emerging-though"
        ref={ref}
        // width="600"
      >
        <source src="https://www.w3schools.com/html/movie.mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;

import { useRef } from "react";
import Video from "../../../../assets/video/auto-360p.mp4";

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
      <video ref={ref}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="pads">
        <button className="play" onClick={handlePlay}>
          Play
        </button>
        <button className="pause" onClick={handlePause}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;

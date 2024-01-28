import { useState } from 'react';
import ReactPlayer from 'react-player';
import { URLMovies } from 'service/URLMovies';

export const VideoPlayer = ({ id }) => {
  const [quality, setQuality] = useState('720');

  const videoUrl = URLMovies(id, quality);
  const [play, setPlay] = useState(false);

  const handlePlay = quality => {
    setPlay(true);
    setQuality(quality);
  };

  return (
    <div>
      <section>
        <p>Ukrainian dubbing</p>
        <button onClick={() => handlePlay('480')}>play sd 480</button>
        <button onClick={() => handlePlay('720')}>play hd 720</button>
        <button onClick={() => handlePlay('1080')}>play fullhd 1080</button>
      </section>

      {play && <ReactPlayer url={videoUrl} controls width={640} height={360} />}
    </div>
  );
};

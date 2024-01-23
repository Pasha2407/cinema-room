import { useState } from 'react';
import ReactPlayer from 'react-player';
import { URLMovies } from 'service/URLMovies';

export const VideoPleyer = ({ id }) => {
  const [quality, setQuality] = useState('720');
  const videoUrl = URLMovies(id, quality);

  const [playUA, setPlayUA] = useState(false);
  const [playRU, setPlayRU] = useState(false);

  const handlePlayUA = quality => {
    setPlayUA(true);
    setPlayRU(false);
    setQuality(quality);
  };
  const handlePlayRU = quality => {
    setPlayRU(true);
    setPlayUA(false);
    setQuality(quality);
  };

  return (
    <div>
      <section>
        <p>Ukrainian dubbing</p>
        <button onClick={() => handlePlayUA('480')}>play sd 480</button>
        <button onClick={() => handlePlayUA('720')}>play hd 720</button>
        <button onClick={() => handlePlayUA('1080')}>play fullhd 1080</button>
        <p>Russian dubbing</p>
        <button onClick={() => handlePlayRU('480')}>play sd 480</button>
        <button onClick={() => handlePlayRU('720')}>play hd 720</button>
      </section>

      {playUA && (
        <ReactPlayer url={videoUrl.ua} controls width={640} height={360} />
      )}
      {playRU && (
        <ReactPlayer url={videoUrl.ru} controls width={640} height={360} />
      )}
    </div>
  );
};

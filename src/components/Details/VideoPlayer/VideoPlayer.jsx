import { useState } from 'react';
import ReactPlayer from 'react-player';
import { URLMovies } from 'service/URLMovies';
import css from './VideoPlayer.module.css';

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
      <section className={css.Play}>
        <h3>Дивитись онлайн українською</h3>
        <button onClick={() => handlePlay('480')}>P SD 480</button>
        <button onClick={() => handlePlay('720')}>P HD 720</button>
        <button onClick={() => handlePlay('1080')}>P Full HD 1080</button>
      </section>

      {play && <ReactPlayer url={videoUrl} controls width={640} height={360} />}
    </div>
  );
};

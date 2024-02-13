import { useState } from 'react';
import ReactPlayer from 'react-player';
import { URLMovies } from 'service/moviesURL';
import css from './VideoPlayer.module.css';
import { useMediaQuery } from 'react-responsive';

export const VideoPlayer = ({ id, searchLink }) => {
  const playerWidth = useMediaQuery({ maxWidth: 450 }) ? 320 : 768;
  const playerHeight = useMediaQuery({ maxWidth: 450 }) ? 180 : 432;

  const [quality, setQuality] = useState('720');

  const videoUrl = URLMovies(id, quality);
  const [play, setPlay] = useState(false);

  const handlePlay = quality => {
    setPlay(true);
    setQuality(quality);
  };

  return (
    <div className={css.Container}>
      <section className={css.Play}>
        <h3>Дивитись онлайн українською</h3>
        <button onClick={() => handlePlay('480')}>P SD 480</button>
        <button onClick={() => handlePlay('720')}>P HD 720</button>
        <button onClick={() => handlePlay('1080')}>P Full HD 1080</button>
      </section>

      {play && (
        <div className={css.Player}>
          <ReactPlayer
            url={videoUrl}
            controls
            width={playerWidth}
            height={playerHeight}
          />
        </div>
      )}
      {play && (
        <i>
          Якщо вас цікавлять інші озвучки, ви можете подивитись на сайті
          <a href={searchLink} target="blank">
            {' '}
            HDrezka
          </a>
        </i>
      )}
    </div>
  );
};

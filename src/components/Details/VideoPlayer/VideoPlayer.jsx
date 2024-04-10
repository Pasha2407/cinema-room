import { useState } from 'react';
import ReactPlayer from 'react-player';
import { URLMovies } from 'service/moviesURL';
import css from './VideoPlayer.module.css';
import { useMediaQuery } from 'react-responsive';
import { FaPlay } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export const VideoPlayer = ({ id, searchLink }) => {
  const playerWidth = useMediaQuery({ maxWidth: 500 }) ? 320 : 768;
  const playerHeight = useMediaQuery({ maxWidth: 500 }) ? 180 : 432;

  const [quality, setQuality] = useState('720');
  const { t } = useTranslation();

  const videoUrl = URLMovies(id, quality);
  const [play, setPlay] = useState(false);

  const handlePlay = quality => {
    setPlay(true);
    setQuality(quality);
  };

  return (
    <div className={css.Container}>
      <section className={css.Play}>
        <h3>{t('details.play.title')}</h3>
        <button onClick={() => handlePlay('480')}>
          <FaPlay /> SD 480
        </button>
        <button onClick={() => handlePlay('720')}>
          <FaPlay /> HD 720
        </button>
        <button onClick={() => handlePlay('1080')}>
          <FaPlay /> Full HD 1080
        </button>
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
          {t('details.play.inf')}
          <a href={searchLink} target="blank">
            {' '}
            {t('general.hdrezka1')}
          </a>
        </i>
      )}
    </div>
  );
};

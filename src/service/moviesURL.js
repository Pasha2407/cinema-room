import { useState, useEffect } from 'react';

export const URLMovies = (id, quality) => {
  const [videoUrls, setVideoUrls] = useState('');
  const end = '/index.m3u8';

  useEffect(() => {
    switch (id) {
      case '414906':
        setVideoUrls(`https://s1.ashdi.vip/content/stream/films/the.batman.2022.bdremux.by.hurtom_62197/hls/${quality}${end}`);
        break;
      case '872585':
        setVideoUrls(`https://s4.ashdi.vip/content/stream/films/oppenheimer_2023_bdrip_1080p_h.265_imax_ukr_eng_hurtom_109925/hls/${quality}${end}`);
        break;
      case '286217':
        setVideoUrls(`https://s1.ashdi.vip/content/stream/films/marsanin_297/hls/${quality}${end}`);
        break;
      case '299534':
        setVideoUrls(`https://s1.ashdi.vip/content/stream/films/mesniki_fnal_314/hls/${quality}${end}`);
        break;
      case '51497':
        setVideoUrls(`https://s1.ashdi.vip/content/stream/films/forsazh_5_1449/hls/${quality}${end}`);
        break;
      default:
        setVideoUrls('');
    }
  }, [id, quality]);
  return videoUrls;
};

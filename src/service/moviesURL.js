import { useState, useEffect } from 'react';

export const URLMovies = (id, quality) => {
  const [videoUrls, setVideoUrls] = useState('');
  const end = '/index.m3u8';

  useEffect(() => {
    switch (id) {
      case '27205':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/pochatok_1219/hls/${quality}${end}`);
        break;
      case '11324':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/new4/shutter_island_2010_bdrip_1080p_4xukr_eng_hurtom_4060/hls/${quality}${end}`);
        break;
      case '419430':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/new4/get_out_2017_bdrip_1080p_ukreng_sub_ukreng_7310/hls/${quality}${end}`);
        break;
      case '157336':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/interstellar_2014_bdrip_1080p_ukr_eng_hurtom_3205/hls/${quality}${end}`);
        break;
      case '281957':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/new4/the_revenant_2015_open_matte_bdrip_1080p_ukr_eng_hurtom_4074/hls/${quality}${end}`);
        break;

      case '497':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/zelena_milya_3278/hls/${quality}${end}`);
        break;
      case '278':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/the_shawshank_redemption_1994_bdrip_1080p_h.265_3xukr_eng_556/hls/${quality}${end}`);
        break;
      case '646380':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/dont_look_up_2021_webdl_1080p_2xukr_eng_hurtom_51212/hls/${quality}${end}`);
        break;
      case '146233':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/prisoners_2013_nld_transfer_bdrip_1080p_h.265_ukr_eng_hurtom_60531/hls/${quality}${end}`);
        break;
      case '286217':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/marsanin_297/hls/${quality}${end}`);
        break;

      case '49530':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/new4/in_time_2011_webdl_1080p_open_matte_ukreng__sub_ukreng_hurtom_6544/hls/${quality}${end}`);
        break;
      case '299536':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/avengers._infinity_war_2018_ukreng_sub.eng_webdl_imax_1080p_hurtom_51264/hls/${quality}${end}`);
        break;
      case '414906':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/the.batman.2022.bdremux.by.hurtom_62197/hls/${quality}${end}`);
        break;
      case '674':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/harry_potter_and_the_goblet_of_fire_2005_2xukr_eng_bdrip_1080p_hurtom_hdclub_by_leroykendall_11/hls/${quality}${end}`);
        break;
      case '120':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/1._the_fellowship_of_the_ring_extended_edition_2001_bdrmx1080p_42903/hls/${quality}${end}`);
        break;

      case '597':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/titank_396/hls/${quality}${end}`);
        break;
      case '471506':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/gretta_350/hls/${quality}${end}`);
        break;
      case '22':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/1._pirates_of_the_caribbean._the_curse_of_the_black_pearl_2003_bdrip_1080p_h.265_3xukr_eng_307/hls/${quality}${end}`);
        break;
      case '550':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/bjczvskij_klub_1054/hls/${quality}${end}`);
        break;
      case '168259':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_7_1466/hls/${quality}${end}`);
        break;

      case '872585':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/oppenheimer_2023_bdrip_1080p_h.265_imax_ukr_eng_hurtom_109925/hls/${quality}${end}`);
        break;
      case '299534':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/mesniki_fnal_314/hls/${quality}${end}`);
        break;
      case '51497':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_5_1449/hls/${quality}${end}`);
        break;
      default:
        setVideoUrls('');
    }
  }, [id, quality]);
  return videoUrls;
};

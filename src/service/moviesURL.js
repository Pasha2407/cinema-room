import { useState, useEffect } from 'react';

export const URLMovies = (id, quality) => {
  const [videoUrls, setVideoUrls] = useState('');
  const end = '/index.m3u8';

  useEffect(() => {
    switch (id) {

      // Recommended movies 
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

      // Recommended cartoons
      case '57800':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/lodovikovij_perod_4_1757/hls/${quality}${end}`);
        break;
      case '808':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/new/shrek_2001_bdremux_1080p_83765/hls/${quality}${end}`);
        break;
      case '920':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/tachki_526/hls/${quality}${end}`);
        break;
      case '9502':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/serials/90210_s5/1._kung_fu_panda_2008_bdrip_1080p_h.265_2xukr_eng_hurtom_6413/hls/${quality}${end}`);
        break;
      case '10191':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/yak_priborkati_drakona_577/hls/${quality}${end}`);
        break;

      case '12':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/finding_nemo_2003_bdrip_1080p_h.265_ukr_eng_1439/hls/${quality}${end}`);
        break;
      case '2062':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/ratatuj_1067/hls/${quality}${end}`);
        break;
      case '10681':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/vall_3303/hls/${quality}${end}`);
        break;
      case '76492':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/video05/films/monstri_na_kankulax_546/hls/${quality}${end}`);
        break;
      case '270946':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/video05/new4/penguins_of_madagascar_2014_bdrip_1080p_ukr_eng_hurtom_6648/hls/${quality}${end}`);
        break;

      //Popular
      case '792307':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/poor_things_2023_webdl_2160p_ukr_eng_mayhemhd_120396/hls/${quality}${end}`);
        break;
      case '763215':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/damsel_2024_webdl_1080p_ukr.eng_ukr.eng_exterminus_121043/hls/${quality}${end}`);
        break;
      case '848538':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/serials/argylle.2024.1080p.web.multirgb_1_120890/hls/${quality}${end}`);
        break;
      case '636706':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/spaceman_2024_webdl_1080p_ukr.eng_sub_ukr.eng_exterminus_120444/hls/${quality}${end}`);
        break;
      case '872585':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/oppenheimer_2023_bdrip_1080p_h.265_imax_ukr_eng_hurtom_109925/hls/${quality}${end}`);
        break;

      case '1072790':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/new/i_119847/hls/${quality}${end}`);
        break;
      case '932420':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/code_8._part_ii_2024_webdl_1080p_ukr.eng_sub_ukr.eng_exterminus_120152/hls/${quality}${end}`);
        break;
      case '572802':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/aquaman_and_the_lost_kingdom_2023_webdl_1080p__ukr.eng_sub_ukr.eng_117795/hls/${quality}${end}`);
        break;
      case '866398':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/the_beekeeper_2024_webdl_2160p_ukr_eng_hurtom_116855/hls/${quality}${end}`);
        break;

      //Trending 

      // Tarantino
      case '16869':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/bezslavn_virodki_2423/hls/${quality}${end}`);
        break;
      case '68718':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/dzhango_vlnij_3306/hls/${quality}${end}`);
        break;

      //Marvel
      case '299534':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/mesniki_fnal_314/hls/${quality}${end}`);
        break;

      //Forsazh
      case '9799':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_1_975/hls/${quality}${end}`);
        break;
      case '584':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_2_976/hls/${quality}${end}`);
        break;
      case '9615':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_3_977/hls/${quality}${end}`);
        break;
      case '13804':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_4_979/hls/${quality}${end}`);
        break;
      case '51497':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_5_1449/hls/${quality}${end}`);
        break;
      case '82992':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_6_1512/hls/${quality}${end}`);
        break;
      case '337339':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_8_1467/hls/${quality}${end}`);
        break;
      case '384018':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/gobs__shou_358/hls/${quality}${end}`);
        break;
      case '385128':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/forsazh_f9_2021_webdl_1080p_ukr_eng_hurtom_48059/hls/${quality}${end}`);
        break;
      case '85687':
        setVideoUrls(`https://jk19ocmjeoyql3tj.ashdi.vip/content/stream/films/fast.x.2023.webdlrip.1080p.ukr.5.1.hdrezka.studio_95214/hls/${quality}${end}`);
        break;

      //DC
      case '297802':
        setVideoUrls(`https://jk29ocmjeoyql3tj.ashdi.vip/content/stream/films/akvamen_500/hls/${quality}${end}`);
        break;

      //Other movies 

      default:
        setVideoUrls('');
    }
  }, [id, quality]);
  return videoUrls;
};


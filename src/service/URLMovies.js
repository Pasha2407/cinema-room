import { useState, useEffect } from 'react';

export const URLMovies = (id, quality) => {
  const [videoUrls, setVideoUrls] = useState();

  useEffect(() => {
    switch (id) {
      case '414906':
        setVideoUrls({
          ua: `https://s1.ashdi.vip/content/stream/films/the.batman.2022.bdremux.by.hurtom_62197/hls/${quality}/index.m3u8`,
          ru: `https://nl06.cdnsqu.com/s/FHOnLnrEIWrzO9_wLZeSOttkFBQUFBT2pXTjBFUllOQUVCZkRqSWtDQg.XPOirB4vRTHwbyNBATwkY1k2ceiZcKJdnBHO9w/uhd_018/The.Batman.2022.BDRip.2160p.SDR.rus_${quality}.mp4`,
        });
        break;
      case '872585':
        setVideoUrls({
          ua: `https://s4.ashdi.vip/content/stream/films/oppenheimer_2023_bdrip_1080p_h.265_imax_ukr_eng_hurtom_109925/hls/${quality}/index.m3u8`,
          ru: `https://nl104.cdnsqu.com/s/FHw1NIo9RlMptsmAllnOAT_UFBQUFBT2pXTjBFUllOQlVBUERqSWtDQg.rDbmYGKRjZTLO8MekTSDYGIYUtxLcnuz8JBnmQ/UHD_090/Oppenheimer.2023.D.BravoRecordsGeorgia.BluRay.IMAX.1080pp_${quality}.mp4`
        });
        break;
      case '286217':
        setVideoUrls({
          ua: `https://s1.ashdi.vip/content/stream/films/marsanin_297/hls/${quality}/index.m3u8`,
          ru: `https://nl202.cdnsqu.com/s/FHLPkvrQPRMr0avHUlDPIR80FBQUFBT2pXTjBFUllDQ0ZndkRqSWtDQg.FSswuhecr7eQtLd6AOEpsf2R6lTS99260m81kw/uhd/The.Martian.2015.EXTENDED.2160p.BluRay.x264.8bit.SDR.Master5_${quality}.mp4?am1`,
        });
        break;
      case '299534':
        setVideoUrls({
          ua: `https://s1.ashdi.vip/content/stream/films/mesniki_fnal_314/hls/${quality}/index.m3u8`,
          ru: `https://nl202.cdnsqu.com/s/FHf-ihJavssEDxj--JwY5U_kFBQUFBT2pXTjBFUllDQ1ZBUERqSWtDQg.uNf4FGs4K6umCJubjXV7lsWxT7dPp9i0exB_nQ/uhd/Avengers.Endgame.2019.2160p.BDRip.x264.8bit.SDR_${quality}.mp4?am1`,
        });
        break;
      case '51497':
        setVideoUrls({
          ua: `https://s1.ashdi.vip/content/stream/films/forsazh_5_1449/hls/${quality}/index.m3u8`,
          ru: `https://nl104.cdnsqu.com/s/FHkhgbkcZCipvXxBKtxoEmGkFBQUFBT2pXTjBFUllDQ1Z3L0RqSWtDQg.OqR0z27XJPrO2IBJky2The92IliDbpKV0wDr0A/hd_50/Fast.Five.2011.BDRip.1080p.RU_${quality}.mp4?vs4-origin`,
        });
        break;
      default:
        setVideoUrls({
          ua: '',
          ru: '',
        });
    }
  }, [id, quality]);
  return videoUrls;
};

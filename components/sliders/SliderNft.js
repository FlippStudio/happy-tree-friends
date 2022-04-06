import { Swiper, SwiperSlide } from "swiper/react";
import nft from "../../public/images/nft/nft.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Nft from "../collection/Nft";
import classes from "../../styles/home/Slider.module.css";

const nfts = [
  {
    id: 1,
    name: "#12 Terra Friend",
    url: nft,
    traits: [
      {
        id: 1,
        type: 'Clothes',
        name: 'Lorem ipsum',
        rarity: 0,
      },
      {
        id: 2,
        type: 'Face',
        name: 'Dolor sit',
        rarity: 0,
      },
      {
        id: 3,
        type: 'Hands',
        name: 'Proin nulla',
        rarity: 0,
      },
      {
        id: 4,
        type: 'Hat',
        name: 'Amet ipsum',
        rarity: 0,
      },
    ]
  },
  {
    id: 2,
    name: "#13 Terra Friend",
    url: nft,
    traits: [
      {
        id: 1,
        type: 'Clothes',
        name: 'Lorem ipsum',
        rarity: 0,
      },
      {
        id: 2,
        type: 'Face',
        name: 'Dolor sit',
        rarity: 0,
      },
      {
        id: 3,
        type: 'Hands',
        name: 'Proin nulla',
        rarity: 0,
      },
      {
        id: 4,
        type: 'Hat',
        name: 'Amet ipsum',
        rarity: 0,
      },
    ]
  },
  {
    id: 3,
    name: "#14 Terra Friend",
    url: nft,
    traits: [
      {
        id: 1,
        type: 'Clothes',
        name: 'Lorem ipsum',
        rarity: 0,
      },
      {
        id: 2,
        type: 'Face',
        name: 'Dolor sit',
        rarity: 0,
      },
      {
        id: 3,
        type: 'Hands',
        name: 'Proin nulla',
        rarity: 0,
      },
      {
        id: 4,
        type: 'Hat',
        name: 'Amet ipsum',
        rarity: 0,
      },
    ]
  },
];

const SliderNft = () => {
  return (
    <div className={classes.nftOverflow}>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {nfts.map((nft) => (
          <SwiperSlide className={`flex-center`} key={nft.id}>
            <Nft nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderNft;

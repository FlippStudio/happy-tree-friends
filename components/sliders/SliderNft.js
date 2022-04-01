import { Swiper, SwiperSlide } from "swiper/react";
import nft from "../../public/images/nft/nft.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Nft from "../collection/Nft";

const nfts = [
  {
    id: 1,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 2,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 3,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 4,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 5,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 6,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 7,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
  {
    id: 8,
    name: "NFT Name #123",
    url: nft,
    fixedPrice: "3.21ETH",
    amountsCollection: 2000,
  },
];

const SliderNft = () => {
  return (
    <div className="d-xs-none">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {nfts.map((nft) => (
          <SwiperSlide
            className={`flex-center`}
            key={nft.id}
          >
            <Nft nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderNft;

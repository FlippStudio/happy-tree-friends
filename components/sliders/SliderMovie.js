import { Swiper, SwiperSlide } from "swiper/react";
import video from "../../public/images/episode/video.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Video from "../episode/Video";

const videos = [
  {
    id: 1,
    title: "Episode #1 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
  {
    id: 2,
    title: "Episode #2 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
  {
    id: 3,
    title: "Episode #3 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
  {
    id: 4,
    title: "Episode #4 - Lorem ipsum",
    desc: "Morbi neque nulla, consequat eget efficitur vel, eleifend ullamcorper nisi. \
        Integer semper imperdiet eros, placerat cursus eros volutpat vitae.",
    duration: "12:56",
    url: video,
  },
];

const SliderMovie = () => {
  return (
    <div className="d-xs-none">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
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
        {videos.map((video) => (
          <SwiperSlide
            className={`flex-center`}
            key={video.id}
          >
            <Video video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMovie;

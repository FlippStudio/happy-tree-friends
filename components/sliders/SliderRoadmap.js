import { Swiper, SwiperSlide } from "swiper/react";
import classes from '../../styles/home/Slider.module.css'
import roadmap from '../../public/images/roadmap/roadmap.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const steps = [
    {
        id: 1,
        title: 'Phase 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.',
        url: roadmap,
    },
    {
        id: 2,
        title: 'Phase 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.',
        url: roadmap,
    },
    {
        id: 3,
        title: 'Phase 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.',
        url: roadmap,
    },
    {
        id: 4,
        title: 'Phase 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.',
        url: roadmap,
    },
]

const SliderRoadmap = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className={classes.overflow}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className={classes.swiper}
        slidesPerView={'auto'}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          1500: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        }}
      >
        {steps.map((step) => (
          <SwiperSlide className={`${classes.slideContainer} flex-center`} key={step.id}>
            Hello
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderRoadmap;
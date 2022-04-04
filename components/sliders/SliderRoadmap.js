import { Swiper, SwiperSlide } from "swiper/react";
import classes from "../../styles/home/Slider.module.css";
import roadmap from "../../public/images/roadmap/roadmap.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { Pagination, Mousewheel } from "swiper";
import { Container, Box, Grid, Typography } from "@mui/material";

const steps = [
  {
    id: 1,
    title: "Phase 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.",
    url: roadmap,
  },
  {
    id: 2,
    title: "Phase 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.",
    url: roadmap,
  },
  {
    id: 3,
    title: "Phase 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.",
    url: roadmap,
  },
  {
    id: 4,
    title: "Phase 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.",
    url: roadmap,
  },
  {
    id: 5,
    title: "Phase 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, \
        accumsan sit amet diam nec, tempor elementum ipsum. Fusce a felis dictum, cursus \
        mauris quis, luctus metus. Maecenas at nibh in lorem vestibulum convallis nec \
        ullamcorper nibh. Proin quam magna, porttitor sit amet ligula finibus, \
        rhoncus faucibus tellus.",
    url: roadmap,
  },
];

const SliderRoadmap = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <Container maxWidth="xl">
      <div className={classes.overflow} id="roadmap">
        <Swiper
          pagination={pagination}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className={classes.swiper}
          slidesPerView={"auto"}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1520: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
        >
          {steps.map((step) => (
            <SwiperSlide
              className={`${classes.slideContainerBox} flex-center`}
              key={step.id}
            >
              <Grid container spacing={3}>
                <Grid item xl={3} md={4} sm={5} xs={12} className="flex-center">
                  <Box className={`${classes.slideBox} flex-center`}>
                    <Box className={`${classes.backBox} flex-center`}>
                      <Image src={step.url} alt={step.title} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xl={9} md={8} sm={7} xs={12}>
                  <Box
                    className="flex-center"
                    sx={{
                      height: "100%",
                    }}
                  >
                    <Box>
                      <Typography component="h3" className={classes.roadTitle}>
                        {step.title}
                      </Typography>
                      <Typography component="div" className={classes.roadDesc}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SliderRoadmap;

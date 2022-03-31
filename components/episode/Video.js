import play from "../../public/images/episode/play.svg";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import classes from "../../styles/home/NftCollection.module.css";

const Video = ({ video }) => {
  return (
    <Box className={classes.videoBox}>
      <Box className={classes.videoImage}>
        <Image src={video.url} alt={video.title} />
        <Typography component="div" className={`${classes.play} flex-center`}>
          <Image src={play} alt="Play video" /> Play video
        </Typography>
        <Typography component="div" className={classes.duration}>
          {video.duration}
        </Typography>
      </Box>
      <Box className={classes.videoText}>
        <Typography component="div" className={classes.videoTitle}>
          {video.title}
        </Typography>
        <Typography component="div">{video.desc}</Typography>
      </Box>
    </Box>
  );
};

export default Video;

import React from "react";
import Slider from "infinite-react-carousel";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useSliderAlangoStyles from "./styles";
import { Box } from "@mui/material";
import img from "../../assets/intro-chip.png";
import img1 from "../../assets/web3Auth_logo.png";

export const SliderComponent = () => {
  const style = useSliderAlangoStyles();
  const sliderRef = React.useRef<null>(null); // Explicitly set the type of sliderRef
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imgArray = [
    {
      img: img1,
    },
    {
      img: img,
    },
    {
      img: img1,
    },
    {
      img: img,
    },
    {
      img: img1,
    },
    {
      img: img,
    },
  ]

  return (
    <>
      <Box className={!isMobile ? style.sliderCont : style.sliderContMob}>

        <Slider
          ref={sliderRef}
          arrows={false}
          className={
            isMobile ? style.sliderContainerMobile : style.sliderContainer
          }
          slidesPerRow={1}
          slidesToShow={isMobile ? 1 : 3}
          centerMode={isMobile && true}
          rows={1}
        >
          {imgArray.map((data, i) => (
            <img key={i} src={data.img} alt={`Slider ${i + 1}`}></img>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default SliderComponent;

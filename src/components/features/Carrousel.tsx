import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_one from "/images/slide_one.jpg";
import slide_two from "/images/slide_two.jpg";
import slide_three from "/images/slide_three.jpg";

type SettingType = {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  speed: number;
};
function Carrousel() {
  const setting: SettingType = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...setting}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
}

export { Carrousel };

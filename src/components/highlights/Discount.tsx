import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { MyButton } from "../utils/MyButton";

function Discount() {
  const end: number = 30;
  const [start, setStart] = useState<number>(0);
  const percentage = () => {
    if (start < end) {
      setStart((preCount) => preCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => setStart((preCount) => preCount + 1), 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView: boolean) => {
            if (inView) {
              percentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{`${start}%`}</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide direction="right">
          <div className="discount_description">
            <h3>Purchase tickets before 20th June</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              necessitatibus harum quas iste vitae velit fugit vel facilis
              fugiat, porro incidunt nobis, illo veritatis reiciendis eligendi
              soluta, pariatur nulla magnam.
            </p>
            <MyButton
              text="Purchase Tickets"
              link="http//:google.com"
              size="medium"
              style={{
                background: "#ffa800",
                color: "#ffffff"
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export { Discount };

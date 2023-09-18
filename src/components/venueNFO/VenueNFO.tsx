import { Zoom } from "react-awesome-reveal";
import calendar from "../../../public/images/icons/calendar.png";
import location from "../../../public/images/icons/location.png";
function VenueNFO() {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item" delay={300}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${calendar})`
                    }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">Sep 20, 2023 @1.20:pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className="vn_item" delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${location})`
                    }}
                  ></div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">Nelum Pokuna Theatre, Colombo.</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export { VenueNFO };

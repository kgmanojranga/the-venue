import { Fade } from "react-awesome-reveal";
function Footer() {
  return (
    <>
      <footer className="bck_red">
        <Fade delay={400} triggerOnce>
          <div className="font_righteous footer_logo_venue">The Venue</div>
          <div className="footer_copyright">
            &copy;The venue 2023. All right reserved
          </div>
        </Fade>
      </footer>
    </>
  );
}

export { Footer };

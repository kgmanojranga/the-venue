function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80392196727!2d79.81500593425265!3d6.921922084676855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1695017686104!5m2!1sen!2slk"
        width="100%"
        height="500px"
        allowFullScreen
        title="gglemaps"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export { Location };

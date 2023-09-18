import { MyButton } from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

type PriceStateTypes = {
  prices: number[];
  position: string[];
  desc: string[];
  linkto: string[];
  delay: number[];
};

function Pricing() {
  const priceState: PriceStateTypes = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Provident, quod adipisci. Aut enim tenetur error eligendi",
      "Harum autem voluptates voluptate corporis voluptatum repellendus"
    ],
    linkto: ["http://sales.b", "http://sales/m", "http://sales.s"],
    delay: [500, 0, 500]
  };

  function showBoxes() {
    return priceState.prices.map((box, i) => (
      <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${box}</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{ color: "#ffffff" }}
              link={priceState.linkto[i]}
            ></MyButton>
          </div>
        </div>
      </Zoom>
    ));
  }

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
}

export { Pricing };

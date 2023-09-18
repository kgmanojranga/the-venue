import { Button } from "@mui/material";
import TicketIcon from "/images/icons/ticket.png";

type MyButtonProps = {
  text: string;
  link: string;
  size?: "small" | "medium" | "large";
  style: { background?: string; color?: string };
  iconTicket?: boolean;
};

function MyButton({ text, link, size, style, iconTicket }: MyButtonProps) {
  return (
    <Button
      href={link}
      variant="contained"
      size={size || "large"}
      style={{
        background: style?.background || "#8e8e8e",
        color: style?.color || "#fff"
      }}
    >
      {iconTicket ? (
        <img src={TicketIcon} className="iconImage" alt="icon_button" />
      ) : null}
      {text}
    </Button>
  );
}

export { MyButton };

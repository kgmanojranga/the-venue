import { Drawer, List, ListItem } from "@mui/material";
import { scroller } from "react-scroll";

type SideDrawer = {
  open: boolean;
  toggleDrawer: (value: boolean) => void;
};

type Links = {
  where: string;
  value: string;
};
function SideDrawer({ open, toggleDrawer }: SideDrawer) {
  const links: Links[] = [
    { where: "featured", value: "To top" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "highlight", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" }
  ];

  const scrollToElement = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });

    toggleDrawer(false);
  };

  function renderItem(item: Links) {
    return (
      <ListItem
        button
        onClick={() => scrollToElement(item.where)}
        key={item.where}
      >
        {item.value}
      </ListItem>
    );
  }

  return (
    // <div>Drawer</div>
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
}

export { SideDrawer };

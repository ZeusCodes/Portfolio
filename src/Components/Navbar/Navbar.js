import * as React from "react";

import {
  // ContactPageTwoTone,
  Home,
  Laptop,
  Settings,
} from "@mui/icons-material";
import DockGooeyNav from "./DockGooeyNav";

// const items = [
//   {
//     icon: <Home size={18} sx={{ color: "white" }} />,
//     label: "Home",
//     onclick: 1,
//   },
//   {
//     icon: <ContactPageTwoTone size={18} color="error" />,
//     label: "About",
//     onclick: 2,
//   },
//   {
//     icon: <Laptop size={18} color="error" />,
//     label: "Portfolio",
//     onclick: 3,
//   },
//   {
//     icon: <Settings size={18} color="error" />,
//     label: "Contact",
//     onclick: 4,
//   },
// ];

const items = [
  {
    icon: <Home size={18} sx={{ color: "white" }} />,
    label: "Home",
    onclick: 1,
  },
  {
    icon: <Laptop size={18} color="error" />,
    label: "Portfolio",
    onclick: 2,
  },
  {
    icon: <Settings size={18} color="error" />,
    label: "Contact",
    onclick: 3,
  },
];

export default function Navbar({ onPageClick }) {
  return (
    <div style={{ position: "fixed", left: "50%", bottom: "2%", zIndex: 10 }}>
      <DockGooeyNav
        onPageClick={(num) => onPageClick(num)}
        items={items}
        panelHeight={60}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

import { useState } from "react";
import * as BsIcons from "react-icons/bs";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {item.icon ? item.icon : ""}
            {item.title}
          </span>
          <BsIcons.BsChevronDown
            className="toggle-btn"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon ? item.icon : ""}
        {item.title}
      </a>
    );
  }
};

export default SidebarItem;

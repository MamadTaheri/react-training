import SidebarItem from "./SidebarItem";
import menuItems from "../data/menuItems";

const Sidebar = () => {
    console.log(menuItems);
  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

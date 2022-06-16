import * as FaIcons from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";

export const SideBarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcon.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoIcon.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoIcon.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcon.IoMdHelpCircle />,
        cName: "nav-text"
    },
]

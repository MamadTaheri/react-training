import * as BsIcons from "react-icons/bs";

const menuItems = [
  {
    "title": "General",
    "icon": <BsIcons.BsGearFill />,
    "childrens": [
      {
        "title": "Home",
        "icon": <BsIcons.BsHouseFill />,
        "path": "/"
      },
      {
        "title": "About",
        "icon": <BsIcons.BsInfoCircleFill />,
        "path": "/about"
      },
      {
        "title": "Contact",
        "icon": <BsIcons.BsPhoneFill />,
        "childrens": [
          {
            "title": "Facebook",
            "icon": <BsIcons.BsFacebook />,
          },
          {
            "title": "Twitter",
            "icon": <BsIcons.BsTwitter />
          },
          {
            "title": "Instagram",
            "icon": <BsIcons.BsInstagram />
          }
        ]
      },
      {
        "title": "FAQ",
        "icon": <BsIcons.BsQuestionCircleFill />
      }
    ]
  },
  {
    "title": "Account",
    "icon": <BsIcons.BsInfoCircleFill />,
    "childrens": [
      {
        "title": "Login",
        "path": "/login"
      },
      {
        "title": "Register",
        "path": "/register"
      },
      {
        "title": "Forgot Password",
        "path": "/forgot-password"
      },
      {
        "title": "Reset Password",
        "path": "/reset-password"
      }
    ]
  },
  {
    "title": "Profile",
    "icon": <BsIcons.BsPersonFill />,
    "childrens": [
      {
        "title": "Profile",
        "path": "/profile"
      },
      {
        "title": "Settings",
        "childrens": [
          {
            "title": "Account",
            "path": "/settings/account"
          },
          {
            "title": "Billing",
            "childrens": [
              {
                "title": "Payment",
                "path": "/settings/billing/payment"
              },
              {
                "title": "Subscription",
                "path": "/settings/billing/subscription"
              }
            ]
          },
          {
            "title": "Notifications",
            "path": "/settings/notifications"
          }
        ]
      },
      {
        "title": "Logout",
        "path": "/logout"
      }
    ]
  },
  {
    "title": "Advance",
    "icon": <BsIcons.BsViewList />,
    "childrens": [
      {
        "title": "Search",
        "path": "/search"
      },
      {
        "title": "History",
        "path": "/history"
      }
    ]
  },
  {
    "title": "Support",
    "icon": <BsIcons.BsQuestionCircleFill />,
    "path": "/support"
  },
  {
    "title": "Report Bug",
    "icon": <BsIcons.BsBug/>,
    "path": "/report-bug"
  }
]

export default menuItems;
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import switzerland from "../../../Assets/Images/contact/Switzerland.svg";
import kosova from "../../../Assets/Images/contact/Kosova.svg";

export const contactLinks = [
  {
    // icon: <img src={email2}  height={17}/>,
    // icon: <AiOutlineMail color='red'/>,
    // contact: ' info@digitbusiness.ch',
    // link: 'mailto:info@digitbusiness.ch',
    // cName: 'contactInfo-Links',
    icon: <AiOutlineMail color="#FF2F51" style={{ marginRight: "3px" }} />,
    contact: " contacts@digitbusiness.ch",
    link: "mailto:contacts@digitbusiness.ch",
    cName: "contactInfo-Links",
  },

  {
    // icon: <img src={phone2}  height={19}/>,
    icon: <AiOutlinePhone color="#FF2F51" />,
    contact2: " +41 79 366 31 36  ",
    link2: "tel:(+41) 79-366-31-36",
    cName2: "contactInfo-Links",
    icon2: <AiOutlinePhone color="#FF2F51" />,
    contact: "  +383 49 999 433",
    link: "tel:(+383) 49-999-433",
    cName: "contactInfo-Links",
  },
  {
    icon: <img src={kosova} height={20} />,
    contact: " Rexhep Mala, 28A Prishtinë",
    link: "https://goo.gl/maps/fBTC4hbT9Gw7eegH6",
    cName: "contactInfo-Links",
    target: "_blank",
    icon2: <img src={switzerland} height={20} />,
    contact2: " Steinstrasse 56, 8003 Zürich",
    link2: "https://goo.gl/maps/5DbqEppQyUQCw4Wv8",
    cName2: "contactInfo-Links",
    target2: "_blank",
  },
];

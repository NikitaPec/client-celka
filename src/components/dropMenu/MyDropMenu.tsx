import React, { useContext } from "react";
import inbox from "./ico/envelope.png";
import settings from "./ico/settings.png";
import help from "./ico/question.png";
import logout from "./ico/log-out.png";
import "./DropMenu.css";
import { Context } from "../..";
import { FunctionDeclaration } from "typescript";

interface IPropsMyDropMenu {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IPropsDropdownItem {
  img: string;
  text: string;
  functionClick?: any;
}

const MyDropMenu = ({ visible, setVisible }: IPropsMyDropMenu) => {
  const { store } = useContext(Context);
  return (
    <div className={`dropdown-menu ${visible ? "active" : "inactive"}`}>
      <h3>
        {store.user.name}
        <br />
        <span>{store.user.email === "" ? store.user.phone : store.user.email}</span>
      </h3>
      <ul>
        <DropdownItem img={settings} text={"Настройки"} />
        <DropdownItem img={inbox} text={"Уведомления"} />
        <DropdownItem img={help} text={"Поддержка"} />
        <DropdownItem
          img={logout}
          text={"Выход"}
          functionClick={() => {
            store.logout();
            setVisible(false);
          }}
        />
      </ul>
    </div>
  );
};

function DropdownItem({ img, text, functionClick }: IPropsDropdownItem) {
  return (
    <li className="dropdownItem" onClick={functionClick}>
      <img src={img} alt={""}></img>
      <a> {text} </a>
    </li>
  );
}

export default MyDropMenu;

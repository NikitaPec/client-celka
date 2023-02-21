import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../..";
import {
  EditItemInputProps,
  UserEditStoreHook,
  UserSettingFormInterfaceInputProps,
} from "./interface";
import "./UserSettingForm.css";

const UserSettingForm: FC<UserSettingFormInterfaceInputProps> = (props) => {
  const { store } = useContext(Context);
  const [tab, setTab] = useState("user");
  const [userEditStor, setUserEditStor] = useState<Array<UserEditStoreHook>>([]);
  useEffect(() => {
    setUserEditStor([
      { title: "Имя", value: store.user.name },
      { title: "Фамилия", value: store.user.surname },
      { title: "Отчество", value: store.user.patronymic },
      { title: "Почта", value: store.user.email },
      { title: "Телефон", value: store.user.phone },
    ]);
  }, [store.user, props.visibleModal]);
  return (
    <div className="BlockInput">
      <div className="UserSettingselector">
        <div
          className={`SelectorType ${tab === "user" ? "active" : "inactive"}`}
          onClick={() => setTab("user")}
        >
          Личные данные
        </div>
        <div
          className={`SelectorType ${tab === "address" ? "active" : "inactive"}`}
          onClick={() => setTab("address")}
        >
          Адрес доставки
        </div>
        <div
          className={`SelectorType ${tab === "password" ? "active" : "inactive"}`}
          onClick={() => setTab("password")}
        >
          Пароль
        </div>
      </div>
      {tab === "user" &&
        userEditStor.map((item, index) => (
          <EditItem
            key={index}
            title={item.title}
            value={item.value}
            setUserEditStor={setUserEditStor}
          />
        ))}
      <div className="BlockButton">
        <button className={"MyButton Off"} onClick={() => props.setVisibleModal(false)}>
          Отмена
        </button>
        <button className={"MyButton On"}>Применить</button>
      </div>
    </div>
  );
};

function EditItem(props: EditItemInputProps) {
  return (
    <div>
      <div className="NameInput">{`${props.title} :`}</div>
      <input
        className="UserSettingInput"
        value={props.value != null ? props.value : ""}
        placeholder={props.value != null ? undefined : "Не указано"}
        onChange={(e) =>
          props.setUserEditStor((prevState) =>
            prevState.map((item) =>
              item.title === props.title ? { ...item, value: e.target.value } : item
            )
          )
        }
      ></input>
    </div>
  );
}

export default observer(UserSettingForm);

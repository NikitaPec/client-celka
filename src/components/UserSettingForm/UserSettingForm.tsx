import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../..";
import EditPersonalData from "./EditPersonalData";
import { UserEditStoreHook, UserSettingFormInterfaceInputProps } from "./interface";
import "./UserSettingForm.css";

const UserSettingForm: FC<UserSettingFormInterfaceInputProps> = (props) => {
  const { stor } = useContext(Context);
  const [tab, setTab] = useState("user");
  const [userEditStor, setUserEditStor] = useState<Array<UserEditStoreHook>>([]);
  useEffect(() => {
    setUserEditStor([
      { title: "Фамилия", value: stor.user.surname, errors: [] },
      { title: "Имя", value: stor.user.name, errors: [] },
      { title: "Отчество", value: stor.user.patronymic, errors: [] },
      { title: "Почта", value: stor.user.email, errors: stor.errors.email },
      { title: "Телефон", value: stor.user.phone, errors: stor.errors.phone },
    ]);
  }, [stor.user, stor.errors, props.visibleModal]);
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
      {tab === "user" && (
        <EditPersonalData
          setUserEditStor={setUserEditStor}
          userEditStor={userEditStor}
          setVisibleModal={props.setVisibleModal}
        />
      )}
    </div>
  );
};

export default observer(UserSettingForm);

import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useState } from "react";
import "./UserSettingForm.css";

interface Props {
  NameInput?: string;
  TypeInput?: string;
  FunctionButton?: any;
  defaultPlaceHolder?: string;
}
const UserSettingForm: FC<Props> = (props) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <div className="BlockInput">
      {props.NameInput ? <div className="nameInput">{`${props.NameInput} :`}</div> : <div />}
      {edit ? (
        <div className="Input">
          <input
            className="UserSettingInput"
            type={props.TypeInput === "password" ? "password" : "text"}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <button className="MyButton On" onClick={props.FunctionButton}>
            Принять
          </button>
          <button className="MyButton Off" onClick={() => setEdit(false)}>
            Отмена
          </button>
        </div>
      ) : (
        <div className="Input">
          <div className="UserSettingText">{props.defaultPlaceHolder}</div>
          <button className="MyButton MyButton.Off" onClick={() => setEdit(true)}>
            Изменить
          </button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default observer(UserSettingForm);

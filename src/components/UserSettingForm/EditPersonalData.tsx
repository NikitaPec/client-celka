import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Context } from "../..";
import { EditItemInputProps, EditPersonalDataInputProps } from "./interface";

const EditPersonalData: FC<EditPersonalDataInputProps> = (props) => {
  const { stor } = useContext(Context);
  async function savePersonalData() {
    const user = {
      id: stor.user.id,
      email:
        stor.user.email === props.userEditStor[3].value ? undefined : props.userEditStor[3].value,
      phone:
        stor.user.phone === props.userEditStor[4].value ? undefined : props.userEditStor[4].value,
      name:
        stor.user.name === props.userEditStor[1].value ? undefined : props.userEditStor[1].value,
      surname:
        stor.user.surname === props.userEditStor[0].value ? undefined : props.userEditStor[0].value,
      patronymic:
        stor.user.patronymic === props.userEditStor[2].value
          ? undefined
          : props.userEditStor[2].value,
    };
    console.log(stor.errors);
    await stor.editUser(user);
  }
  return (
    <div>
      {props.userEditStor.map((item, index) => (
        <EditItem
          key={index}
          title={item.title}
          value={item.value}
          errors={item.errors}
          setUserEditStor={props.setUserEditStor}
        />
      ))}
      <div className="BlockButton">
        <button
          className={"MyButton Off"}
          onClick={() => {
            props.setVisibleModal(false);
            stor.setClearErrors();
          }}
        >
          Отмена
        </button>
        <button className={"MyButton On"} onClick={() => savePersonalData()}>
          Применить
        </button>
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
      <h5 className={"myTextError"}>{props.errors}</h5>
    </div>
  );
}

export default observer(EditPersonalData);

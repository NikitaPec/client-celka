import React, { FC, useContext } from "react";
import { Context } from "../..";
import "./AuthForm.css";
import ErrorList from "./errorList";
import imgShowPass from "./png/icons8-показать-48.png";
import imgHigePass from "./png/icons8-скрыто-48.png";
import { LoginFormInputProps } from "./interface";
import { observer } from "mobx-react-lite";

const RegistrationForm: FC<LoginFormInputProps> = (props) => {
  const { store } = useContext(Context);
  async function registration() {
    await store.registration(
      props.AuthFormStor.registrationStor.login,
      props.AuthFormStor.registrationStor.password,
      props.AuthFormStor.registrationStor.confirm
    );
    props.SetAuthFormStor((prevState) => ({
      ...prevState,
      registrationStor: {
        ...prevState.registrationStor,
        login: "",
        password: "",
        arrayErrorLogin: store.errors.login,
        arrayErrorPassword: store.errors.password,
        arrayErrorConfirm: store.errors.confirm,
      },
    }));
    if (store.isAuth === true) {
      props.SetAuthFormStor((prevState) => ({
        ...prevState,
        registrationStor: {
          ...prevState.registrationStor,
          login: "",
          password: "",
          confirm: "",
          arrayErrorLogin: [],
          arrayErrorPassword: [],
          arrayErrorConfirm: [],
        },
      }));
      props.setVisibleModal(false);
    }
  }
  return (
    <div>
      <div className={"InputBlockLogin"}>
        <input
          onChange={(e) =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              registrationStor: {
                ...prevState.registrationStor,
                login: e.target.value,
              },
            }))
          }
          value={props.AuthFormStor.registrationStor.login}
          type="text"
          placeholder="Логин"
        />
      </div>
      {props.AuthFormStor.registrationStor.arrayErrorLogin?.map((error, index) => (
        <ErrorList title={error} key={index + 1} />
      ))}
      <div className={"InputBlockPassword"}>
        <input
          onChange={(e) =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              registrationStor: {
                ...prevState.registrationStor,
                password: e.target.value,
              },
            }))
          }
          value={props.AuthFormStor.registrationStor.password}
          type={props.AuthFormStor.registrationStor.passwordVisible ? "text" : "password"}
          placeholder="Пароль"
        />
        <img
          alt={""}
          src={props.AuthFormStor.registrationStor.passwordVisible ? imgShowPass : imgHigePass}
          onClick={() =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              registrationStor: {
                ...prevState.registrationStor,
                passwordVisible: !props.AuthFormStor.registrationStor.passwordVisible,
              },
            }))
          }
        ></img>
      </div>
      {props.AuthFormStor.registrationStor.arrayErrorPassword?.map((error, index) => (
        <ErrorList title={error} key={index + 1} />
      ))}
      <div className={"InputBlockPassword"}>
        <input
          onChange={(e) =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              registrationStor: {
                ...prevState.registrationStor,
                confirm: e.target.value,
              },
            }))
          }
          value={props.AuthFormStor.registrationStor.confirm}
          type={props.AuthFormStor.registrationStor.confirmVisible ? "text" : "password"}
          placeholder="Подтверждение пароля"
        />
        <img
          alt={""}
          src={props.AuthFormStor.registrationStor.confirmVisible ? imgShowPass : imgHigePass}
          onClick={() =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              registrationStor: {
                ...prevState.registrationStor,
                confirmVisible: !props.AuthFormStor.registrationStor.confirmVisible,
              },
            }))
          }
        ></img>
      </div>
      {props.AuthFormStor.registrationStor.arrayErrorConfirm?.map((error, index) => (
        <ErrorList title={error} key={index + 1} />
      ))}
      <button className={"AuthButton"} onClick={registration}>
        Регистрация
      </button>
    </div>
  );
};

export default observer(RegistrationForm);

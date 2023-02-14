import React, { FC, useContext } from "react";
import { Context } from "../..";
import "./AuthForm.css";
import ErrorList from "./errorList";
import imgShowPass from "./png/icons8-показать-48.png";
import imgHigePass from "./png/icons8-скрыто-48.png";
import { LoginFormInputProps } from "./interface";
import { observer } from "mobx-react-lite";

const LoginForm: FC<LoginFormInputProps> = (props) => {
  const { store } = useContext(Context);
  async function loogin() {
    await store.login(props.AuthFormStor.loginStor.login, props.AuthFormStor.loginStor.password);
    props.SetAuthFormStor((prevState) => ({
      ...prevState,
      loginStor: {
        ...prevState.loginStor,
        login: "",
        password: "",
        arrayErrorLogin: store.errors.login,
        arrayErrorPassword: store.errors.password,
      },
    }));
    if (store.isAuth === true) {
      props.SetAuthFormStor((prevState) => ({
        ...prevState,
        loginStor: {
          ...prevState.loginStor,
          login: "",
          password: "",
          arrayErrorLogin: [],
          arrayErrorPassword: [],
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
              loginStor: {
                ...prevState.loginStor,
                login: e.target.value,
              },
            }))
          }
          value={props.AuthFormStor.loginStor.login}
          type="text"
          placeholder="Логин"
        />
      </div>
      {props.AuthFormStor.loginStor.arrayErrorLogin?.map((error, index) => (
        <ErrorList title={error} key={index + 1} />
      ))}
      <div className={"InputBlockPassword"}>
        <input
          onChange={(e) =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              loginStor: {
                ...prevState.loginStor,
                password: e.target.value,
              },
            }))
          }
          value={props.AuthFormStor.loginStor.password}
          type={props.AuthFormStor.loginStor.passwordVisible ? "text" : "password"}
          placeholder="Пароль"
        />
        <img
          alt={""}
          src={props.AuthFormStor.loginStor.passwordVisible ? imgShowPass : imgHigePass}
          onClick={() =>
            props.SetAuthFormStor((prevState) => ({
              ...prevState,
              loginStor: {
                ...prevState.loginStor,
                passwordVisible: !props.AuthFormStor.loginStor.passwordVisible,
              },
            }))
          }
        ></img>
      </div>
      {props.AuthFormStor.loginStor.arrayErrorPassword?.map((error, index) => (
        <ErrorList title={error} key={index + 1} />
      ))}
      <button className={"AuthButton"} onClick={loogin}>
        Логин
      </button>
    </div>
  );
};

export default observer(LoginForm);
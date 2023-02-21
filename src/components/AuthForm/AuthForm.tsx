import React, { FC, useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import "./AuthForm.css";
import { AuthFormInterfaceHook, AuthFormInterfaceInputProps } from "./interface";
import { observer } from "mobx-react-lite";

export const defaultValue = {
  form: {
    typeForm: true,
  },
  loginStor: {
    login: "",
    password: "",
    passwordVisible: false,
    arrayErrorPassword: [],
    arrayErrorLogin: [],
  },
  registrationStor: {
    login: "",
    password: "",
    confirm: "",
    passwordVisible: false,
    confirmVisible: false,
    arrayErrorPassword: [],
    arrayErrorLogin: [],
    arrayErrorConfirm: [],
  },
};

const AuthForm: FC<AuthFormInterfaceInputProps> = (props) => {
  const [AuthFormStor, SetAuthFormStor] = useState<AuthFormInterfaceHook>(defaultValue);

  return (
    <div>
      <div className="AuthForm">
        <div
          className={`SelectorType ${AuthFormStor.form.typeForm ? "active" : "inactive"}`}
          onClick={() =>
            SetAuthFormStor((prevState) => ({
              ...prevState,
              form: {
                typeForm: true,
              },
            }))
          }
        >
          войти
        </div>
        <div
          className={`SelectorType ${AuthFormStor.form.typeForm ? "inactive" : "active"}`}
          onClick={() =>
            SetAuthFormStor((prevState) => ({
              ...prevState,
              form: {
                typeForm: false,
              },
            }))
          }
        >
          регистрация
        </div>
      </div>
      <hr></hr>
      {AuthFormStor.form.typeForm ? (
        <LoginForm
          setVisibleModal={props.setVisibleModal}
          AuthFormStor={AuthFormStor}
          SetAuthFormStor={SetAuthFormStor}
        />
      ) : (
        <RegistrationForm
          setVisibleModal={props.setVisibleModal}
          AuthFormStor={AuthFormStor}
          SetAuthFormStor={SetAuthFormStor}
        />
      )}
    </div>
  );
};

export default observer(AuthForm);

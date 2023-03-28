import { Dispatch, SetStateAction } from "react";

export interface AuthFormInterfaceInputProps {
  visibleModal: boolean;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AuthFormInterfaceHook {
  form: form;
  loginStor: loginStor;
  registrationStor: registrationStor;
}

export interface LoginFormInputProps {
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
  AuthFormStor: AuthFormInterfaceHook;
  SetAuthFormStor: Dispatch<SetStateAction<AuthFormInterfaceHook>>;
}

interface form {
  typeForm: boolean;
}

interface loginStor {
  login: string;
  password: string;
  passwordVisible: boolean;
  arrayErrorPassword: Array<string>;
  arrayErrorLogin: Array<string>;
}

interface registrationStor {
  login: string;
  password: string;
  confirm: string;
  passwordVisible: boolean;
  confirmVisible: boolean;
  arrayErrorPassword: Array<string>;
  arrayErrorLogin: Array<string>;
  arrayErrorConfirm: Array<string>;
}

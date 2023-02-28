export interface AuthResponse {
  success: boolean;
  data: IData;
  errors: IError;
}

export interface IError {
  login: Array<string>;
  email: Array<string>;
  phone: Array<string>;
  password: Array<string>;
  confirm: Array<string>;
}

export interface IData {
  accessToken: string;
  refreshToken: boolean;
  user: IUser;
}

export interface IUser {
  email: string | null;
  phone: string | null;
  id: string | number;
  isActivatedEmail: boolean;
  isActivatedPhone: boolean;
  name: string;
  surname: string | null;
  patronymic: string | null;
  role: string;
}

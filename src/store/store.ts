import { makeAutoObservable } from "mobx";
import { IError, IUser } from "../models/response/AuthResponse";
import AuthService from "../service/AuthService";

interface errors {
  [index: string]: Array<string>;
}

export default class Store {
  user = {};
  isAuth = false;
  errors: IError = {
    login: [],
    password: [],
    confirm: [],
  };
  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: object) {
    this.user = user;
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      if (response.data.success === true) {
        this.errors = response.data.errors;
        localStorage.setItem("token", response.data.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.data.user);
      } else {
        this.errors = response.data.errors;
        console.log(response.data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async registration(login: string, password: string, confirm: string) {
    try {
      const response = await AuthService.registration(login, password, confirm);
      console.log(response);
      if (response.data.success === true) {
        console.log(response);
        localStorage.setItem("token", response.data.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.data.user);
      } else {
        this.errors = response.data.errors;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      if (response.data.success === true) {
        localStorage.removeItem("token");
        this.setAuth(false);
        this.setUser({} as IUser);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

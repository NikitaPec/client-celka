import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../API";
import { IError, IUser } from "../models/response/AuthResponse";
import AuthService from "../service/AuthService";
import EditService from "../service/EditService";

export default class Stor {
  user: IUser = {
    email: "",
    phone: "",
    id: "",
    isActivatedEmail: false,
    isActivatedPhone: false,
    name: "",
    surname: "",
    patronymic: "",
    role: "",
  };
  isAuth = false;

  errors: IError = {
    login: [],
    email: [],
    phone: [],
    password: [],
    confirm: [],
  };
  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setClearErrors() {
    this.errors = {
      login: [],
      email: [],
      phone: [],
      password: [],
      confirm: [],
    };
  }

  setErrors(error: IError) {
    this.errors = error;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      if (response.data.success === true) {
        this.setErrors(response.data.errors);
        localStorage.setItem("token", response.data.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.data.user);
      } else {
        this.setErrors(response.data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async registration(login: string, password: string, confirm: string) {
    try {
      const response = await AuthService.registration(login, password, confirm);
      if (response.data.success === true) {
        this.setErrors(response.data.errors);
        localStorage.setItem("token", response.data.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.data.user);
      } else {
        this.setErrors(response.data.errors);
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

  async checkAuth() {
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem("token", response.data.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async editUser(user: any) {
    try {
      const response = await EditService.userEdit(user);
      if (response.data.success === true) {
        this.setErrors(response.data.errors);
        localStorage.setItem("token", response.data.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.data.user);
      } else {
        this.setErrors(response.data.errors);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

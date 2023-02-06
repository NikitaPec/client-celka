import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api
      .post<AuthResponse>("/login", { login, password })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        if (err.response.status === 400) {
          return err.response;
        } else {
          throw err;
        }
      });
  }

  static async registration(
    login: string,
    password: string,
    confirm: string
  ): Promise<AxiosResponse<AuthResponse, any>> {
    return $api
      .post<AuthResponse>("/registration", { login, password, confirm })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        if (err.response.status === 417) {
          return err.response;
        } else {
          throw err;
        }
      });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/logout");
  }
}

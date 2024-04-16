import { IUserCredentials } from "../../models/user-credentials";
import { urls } from "../environment/url.resource";
import authenticationMapper from "../mappers/authentication.mapper";
import http from "./general/http.service";
import { StorageService } from "./general/storage.service";

export const authService = (credentials: IUserCredentials): Promise<boolean> => {
  const url = urls.auth;
  const body = authenticationMapper.toApi(credentials);
  return http.post(url, body)
    .then((response) => response.json())
    .then((response) => {
      const storage = new StorageService();
      storage.set('TOKEN', response.token);
      return Boolean(response.token);
    });
}
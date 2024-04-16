import { IUserCredentials } from "../../models/user-credentials";

export default {
  toApi: (credentials: IUserCredentials): any => {
    return {
      UserName: credentials.userName,
      Password: credentials.password
    }
  }
}
import { urls } from "../environment/url.resource";
import http from "./general/http.service";

export const getCustomers = (): Promise<string[]> => {
  const url = urls.customer;
  return http.get(url)
    .then((response) => response.json())
    .then((response) => response);
}
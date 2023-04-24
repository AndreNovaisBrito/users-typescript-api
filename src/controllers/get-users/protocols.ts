import { User } from "../../models/user";

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}

export enum HttpStatusCode {
  CREATED = 201,
  OK = 200,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

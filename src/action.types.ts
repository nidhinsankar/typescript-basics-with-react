export interface Name {
  first: string;
  last: string;
}
export interface Login {
  uuid: string;
}
export interface UserTYpe {
  name: Name;
  login: Login;
  email: string;
  phone: number;
  gender: string;
}

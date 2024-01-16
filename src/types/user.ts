export interface IUser {
  email: string
  name: string
}

export interface ILoginResponse {
  user: IUser
  token: string
}

export interface ILoginRequest {
  email: string
  password: string
}
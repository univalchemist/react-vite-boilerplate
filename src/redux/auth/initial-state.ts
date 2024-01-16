import { IUser } from '@/types/user'

export interface AuthState {
  user?: IUser
  token?: string
  isAuthenticated: boolean
}

export const initialState: AuthState = {
  user: {
    email: 'user@test.com',
    name: 'Test User',
  },
  token: '',
  isAuthenticated: true,
}

import { create } from 'zustand'
export interface IUser {
  id: string
  email: string
  fullName: string
  mobileNo?: number
}

interface AuthState {
  user: IUser | null
  isAuthenticated: boolean
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
}))

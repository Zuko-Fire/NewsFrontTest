export interface News {
  id: number;
  header: string;
  userId: number;
  imagePath?: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  tags: Tag[];
}

export interface Tag {
  id: number;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsState {
  news: News[];
  isLoading: boolean;
  error: string | null;
}

export interface NewsAction {
  type: string;
  payload?: News[];
  error?: string;
}

export interface ShowModalAction {
  type: string;
  payload: ShowModalState;
}
export interface ShowModalState {
  modalType: string;
  isModalOpen: boolean;
}

export interface User {
  avatarPath?: string;
  createdAt: string;
  email: string;
  id: number;
  login: string;
  updatedAt: Date;
  news: News[];
}

export interface AuthPayload {
  sendType: string;
  login?: string;
  email: string;
  password: string;
}

export interface AuthAction {
  type: string;
  error?: string;
  payload?: AuthPayload | Auth;
  user?: User;
  isLoading?: boolean;
}

export interface AuthState {
  error?: string;
  authUser: User;
  isLoading: boolean;
}

export interface Auth {
  user: User;
  accessToken?: string;
}

export interface ActionSucceed {
  payload: Auth;
  isLoading: boolean;
  error?: string;
}
export interface SendData {
  login?: string;
  email: string;
  password: string;
}

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error?: string | null;
  userNews: News[];
}

export interface UserAction {
  type: string;
  id?: string;
  user?: User;
  news?: News[];
  error?: string| null;
  isLoading?: boolean;
}

export interface EditUser {
  currentPassword?: string;
  newPassword?: string;
  login?: string;
  email?: string;
}

export interface EditUserPayload {
  id: string;
  userData: EditUser;
}

export interface EditUserAction {
  type: string;
  payload?: EditUserPayload;
  error?: string | null;
  newUser?: User;
}

export interface IUserInterface {
  userId: string;
  name: string;
  email: string;
  hasVerifiedEmail: boolean;
  iat: string;
  exp: string;
  createdAt: string;
}

export const defaultUser: IUserInterface = {
  userId: '',
  name: '',
  email: '',
  hasVerifiedEmail: true,
  iat: '',
  exp: '',
  createdAt: '',
};
